import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { applyFilters } from '../../redux/slices/filters-slice'
import Ticket from '../ticket/ticket'

import styles from './list.module.scss'

function List() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  /* const filters = useSelector((state) => state.filters) */

  useEffect(() => {
    dispatch(applyFilters({ tickets }))
  }, [dispatch, tickets])

  const filteredTickets = useSelector((state) => state.filters.filteredTickets)

  return (
    <>
      <ul className={styles.ticket_list}>
        {filteredTickets.map((ticket) => (
          <Ticket key={uuidv4()} ticket={ticket} />
        ))}
      </ul>
      <button type="button" className={styles.button}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  )
}

export default List
