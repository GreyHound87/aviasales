import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const data = await response.json()
  return data.searchId
})

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId, { dispatch }) => {
  const fetchTicketsRecursive = async (receivedTickets = []) => {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      const data = await response.json()

      if (Array.isArray(data.tickets)) {
        const updatedTickets = [...receivedTickets, ...data.tickets]
        dispatch(ticketsSlice.actions.updateTickets(updatedTickets))

        if (!data.stop) {
          return fetchTicketsRecursive(updatedTickets)
        }
      }

      return receivedTickets
    } catch (error) {
      return fetchTicketsRecursive(receivedTickets)
    }
  }

  const updatedTickets = await fetchTicketsRecursive()
  return updatedTickets
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    isLoading: false,
    error: null,
    errors: [],
  },
  reducers: {
    updateTickets: (state, action) => ({ ...state, tickets: action.payload }),
    addError: (state, action) => ({ ...state, errors: [...state.errors, action.payload] }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => ({ ...state, searchId: action.payload }))
      .addCase(fetchTickets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchTickets.fulfilled, (state, action) => {
        const newTickets = action.payload.tickets
        const updatedTickets = Array.isArray(newTickets) ? [...state.tickets, ...newTickets] : state.tickets

        return {
          ...state,
          tickets: updatedTickets,
          isLoading: action.payload.stop,
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
        errors: [...state.errors, action.error.message],
      }))
  },
})

export const { updateTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
