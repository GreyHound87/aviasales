import React from 'react'
import { useDispatch } from 'react-redux'

import { setSortBy } from '../../redux/slices/sorting-slice'

import styles from './sorting-tabs.module.scss'

function SortingTabs() {
  const dispatch = useDispatch()

  const handleSortChange = (sortBy) => {
    dispatch(setSortBy(sortBy))
  }

  return (
    <nav className={styles.tabs}>
      <button className={styles.tab} type="button" onClick={() => handleSortChange('cheap')}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </button>
      <button className={styles.tab} type="button" onClick={() => handleSortChange('fast')}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </button>
      <button className={styles.tab} type="button" onClick={() => handleSortChange('optimal')}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </button>
    </nav>
  )
}

export default SortingTabs
