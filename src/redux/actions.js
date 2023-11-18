export const setTickets = (tickets) => ({
  type: 'SET_TICKETS',
  payload: tickets,
})

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  payload: isLoading,
})
