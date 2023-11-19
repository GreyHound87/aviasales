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

      const filteredTickets = tickets.filter(
        (ticket) =>
          (state.filters.all || !state.filters.nullTransfer || ticket.stops.length === 0) &&
          (state.filters.all || !state.filters.oneTransfer || ticket.stops.length === 1) &&
          (state.filters.all || !state.filters.twoTransfer || ticket.stops.length === 2) &&
          (state.filters.all || !state.filters.threeTransfer || ticket.stops.length === 3)
      )

      return { ...state, filteredTickets }
    },
  },
})

export const { setFilter, applyFilters } = filtersSlice.actions
export default filtersSlice.reducer
