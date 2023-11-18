import React from 'react'

import Filter from '../filter/filter'

import styles from './side-bar.module.scss'

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Filter />
    </div>
  )
}

export default SideBar
