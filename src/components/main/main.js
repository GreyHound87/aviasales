import React from 'react'

import List from '../list/list'
import SortingTabs from '../sorting-tabs/sorting-tabs'
/* import Message from '../message/message'
import Spinner from '../spinner/spinner' */

import styles from './main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <SortingTabs />
      {/* <Spinner />
      <Message /> */}
      <List />
    </main>
  )
}

export default Main
