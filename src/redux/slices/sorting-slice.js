import { createSlice } from '@reduxjs/toolkit'

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sortBy: 'default',
  },
  reducers: {
    setSortBy: (state, action) => ({ ...state, sortBy: action.payload }),
  },
})

export const { setSortBy } = sortingSlice.actions
export default sortingSlice.reducer
