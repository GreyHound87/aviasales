import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { applyFilters } from '../../redux/slices/filters-slice'
import Ticket from '../ticket/ticket'

import styles from './list.module.scss'

function List() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const filters = useSelector((state) => state.filters.filters)
  const sortBy = useSelector((state) => state.sorting.sortBy)
  const [visibleTickets, setVisibleTickets] = useState(5)

  useEffect(() => {
    dispatch(applyFilters({ tickets, filters }))
  }, [dispatch, tickets, filters, visibleTickets])

  const filteredTickets = useSelector((state) => state.filters.filteredTickets)

  const getTotalDuration = useMemo(
    () => (ticket) => ticket.segments.reduce((total, segment) => total + segment.duration, 0),
    []
  )
  const calculateOptimalValue = useMemo(
    () => (ticket) => ticket.price * (1 + ticket.segments[0].stops.length + ticket.segments[1].stops.length),
    []
  )

  const sortFunctions = {
    cheap: (a, b) => a.price - b.price,
    fast: (a, b) => getTotalDuration(a) - getTotalDuration(b),
    optimal: (a, b) => calculateOptimalValue(a) - calculateOptimalValue(b),
  }

  const sortedTickets = [...filteredTickets].sort(sortFunctions[sortBy] || (() => 0))
  const displayedTickets = sortedTickets.slice(0, visibleTickets)

  const handleShowMore = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5)
  }

  return (
    <>
      {displayedTickets.length > 0 ? (
        <ul className={styles.ticket_list}>
          {displayedTickets.map((ticket) => (
            <Ticket key={uuidv4()} ticket={ticket} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}
      {visibleTickets < filteredTickets.length && (
        <button type="button" className={styles.button} onClick={handleShowMore}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  )
}

export default List
