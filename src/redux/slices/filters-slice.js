import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    all: true,
    nullTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
  filteredTickets: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterName, value } = action.payload

      if (filterName === 'all' && value) {
        return { ...initialState }
      }

      if (filterName === 'all' && !value) {
        return {
          ...state,
          filters: {
            all: false,
            nullTransfer: false,
            oneTransfer: false,
            twoTransfer: false,
            threeTransfer: false,
          },
        }
      }

      if (state.filters.all && filterName !== 'all' && !value) {
        return {
          ...state,
          filters: { ...state.filters, all: false, [filterName]: false },
        }
      }

      if (filterName !== 'all' && value) {
        const newFilters = { ...state.filters, [filterName]: value }
        const areAllOthersSelected = ['nullTransfer', 'oneTransfer', 'twoTransfer', 'threeTransfer'].every(
          (key) => newFilters[key]
        )
        return { ...state, filters: { ...newFilters, all: areAllOthersSelected } }
      }

      return { ...state, filters: { ...state.filters, [filterName]: value } }
    },

    applyFilters: (state, action) => {
      const { tickets } = action.payload

      if (!Array.isArray(tickets)) {
        console.error('Tickets are not an array:', tickets)
        return state
      }

      const filteredTickets = tickets.filter((ticket) => {
        const stopsOutbound = ticket.segments[0].stops.length
        const stopsInbound = ticket.segments[1].stops.length

        return (
          state.filters.all ||
          (state.filters.nullTransfer && stopsOutbound <= 0 && stopsInbound === 0) ||
          state.filters.all ||
          (state.filters.oneTransfer && stopsOutbound <= 1 && stopsInbound <= 1) ||
          state.filters.all ||
          (state.filters.twoTransfer && stopsOutbound <= 2 && stopsInbound <= 2) ||
          state.filters.all ||
          (state.filters.threeTransfer && stopsOutbound <= 3 && stopsInbound <= 3)
        )
      })

      return { ...state, filteredTickets }
    },
  },
})

export const { setFilter, applyFilters } = filtersSlice.actions
export default filtersSlice.reducer
