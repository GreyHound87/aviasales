// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  nullTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
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
          all: false,
          nullTransfer: false,
          oneTransfer: false,
          twoTransfer: false,
          threeTransfer: false,
        }
      }

      if (state.all && filterName !== 'all' && !value) {
        return { ...state, all: false, [filterName]: false }
      }

      if (filterName !== 'all' && value) {
        const newState = { ...state, [filterName]: value }
        const areAllOthersSelected = ['nullTransfer', 'oneTransfer', 'twoTransfer', 'threeTransfer'].every(
          (key) => newState[key]
        )
        return { ...state, [filterName]: value, all: areAllOthersSelected }
      }

      return { ...state, [filterName]: value }
    },
  },
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
