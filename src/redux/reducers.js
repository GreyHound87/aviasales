import { combineReducers } from '@reduxjs/toolkit'

import sortingReducer from './slices/sorting-slice'
import filtersReducer from './slices/filters-slice'
import ticketsReducer from './slices/tickets-slice'

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filters: filtersReducer,
  tickets: ticketsReducer,
})

export default rootReducer
