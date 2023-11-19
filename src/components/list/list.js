import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { applyFilters } from '../../redux/slices/filters-slice'
import Ticket from '../ticket/ticket'

import styles from './list.module.scss'

function List() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const filters = useSelector((state) => state.filters.filters)
  const [visibleTickets, setVisibleTickets] = useState(5)

  useEffect(() => {
    dispatch(applyFilters({ tickets, filters }))
  }, [dispatch, tickets, filters, visibleTickets])

  const filteredTickets = useSelector((state) => state.filters.filteredTickets)
  const displayedTickets = filteredTickets.slice(0, visibleTickets)

  const handleShowMore = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5)
  }

  return (
    <>
      <ul className={styles.ticket_list}>
        {displayedTickets.map((ticket) => (
          <Ticket key={uuidv4()} ticket={ticket} />
        ))}
      </ul>
      {visibleTickets < filteredTickets.length && (
        <button type="button" className={styles.button} onClick={handleShowMore}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  )
}

export default List
