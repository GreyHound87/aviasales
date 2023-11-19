import React from 'react'
import { useSelector } from 'react-redux'

import List from '../list/list'
import SortingTabs from '../sorting-tabs/sorting-tabs'
import Message from '../message/message'
import Spinner from '../spinner/spinner'

import styles from './main.module.scss'

function Main() {
  const error = useSelector((state) => state.tickets.error)
  const isLoading = useSelector((state) => state.tickets.isLoading)
  return (
    <main className={styles.main}>
      <SortingTabs />
      {isLoading && <Spinner />}
      <List />

      {error && <Message />}
    </main>
  )
}

export default Main
