import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const data = await response.json()
  return data.searchId
})

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
  const data = await response.json()
  return data
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => ({ ...state, searchId: action.payload }))
      .addCase(fetchTickets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchTickets.fulfilled, (state, action) => ({
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        isLoading: !action.payload.stop,
      }))
      .addCase(fetchTickets.rejected, (state, action) => ({ ...state, error: action.error.message }))
  },
})

export default ticketsSlice.reducer
