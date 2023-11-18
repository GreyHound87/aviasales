import React from 'react'

import Ticket from '../ticket/ticket'

import styles from './list.module.scss'

function List() {
  return (
    <>
      <ul className={styles.ticket_list}>
        <Ticket key={0} />

        <Ticket key={1} />

        <Ticket key={3} />
      </ul>
      <button type="button" className={styles.button}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  )
}

export default List
