import React from 'react'

import styles from './ticket.module.scss'

function Ticket({ ticket }) {
  const { price /* , segments */ } = ticket

  return (
    <li className={styles.ticket}>
      <h3 className={styles.price_logo}>
        <span className={styles.price}>{price} Р</span>
        {/* <img className={styles.logo} alt="logo" src= /> */}
      </h3>

      <p className={styles.information}>
        <span className={`${styles.text} ${styles.gray_text}`}>MOW – HKT</span>
        <span className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</span>
        <span className={`${styles.text} ${styles.gray_text}`}>2 пересадки</span>
        <span className={styles.text}>11:20 – 00:50</span>
        <span className={styles.text}> 13ч 30м</span>
        <span className={styles.text}> HKG</span>
      </p>
      <p className={styles.information}>
        <span className={`${styles.text} ${styles.gray_text}`}>MOW – HKT</span>
        <span className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</span>
        <span className={`${styles.text} ${styles.gray_text}`}>2 пересадки</span>
        <span className={styles.text}>11:20 – 00:50</span>
        <span className={styles.text}> 13ч 30м</span>
        <span className={styles.text}> HKG</span>
      </p>
    </li>
  )
}

export default Ticket
