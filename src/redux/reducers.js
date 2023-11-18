import { combineReducers } from '@reduxjs/toolkit'

import sortingReducer from './slices/sorting-slice'
import filtersReducer from './slices/filters-slice'

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filters: filtersReducer,
})

export default rootReducer
