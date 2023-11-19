import React from 'react'
import { useSelector } from 'react-redux'

import styles from './message.module.scss'

function Message() {
  const error = useSelector((state) => state.tickets.error)

  return <div className={styles.errorMsg}>{error ? 'Что-то пошло не так.. Мы скоро все исправим' : null}</div>
}

export default Message
