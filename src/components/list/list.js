import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../ticket/ticket'

import styles from './list.module.scss'

function List() {
  const tickets = useSelector((state) => state.tickets.tickets)
  return (
    <>
      <ul className={styles.ticket_list}>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </ul>
      <button type="button" className={styles.button}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  )
}

export default List
