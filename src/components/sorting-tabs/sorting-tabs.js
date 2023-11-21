import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSortBy } from '../../redux/slices/sorting-slice'

import styles from './sorting-tabs.module.scss'

function SortingTabs() {
  const dispatch = useDispatch()
  const sortBy = useSelector((state) => state.sorting.sortBy)

  const handleSortChange = (newSortBy) => {
    dispatch(setSortBy(newSortBy))
  }

  return (
    <div className={styles.tabs}>
      <label className={`${styles.tab} ${sortBy === 'cheap' && styles.active}`}>
        <input
          className={styles.input}
          type="radio"
          name="sorting"
          value="cheap"
          checked={sortBy === 'cheap'}
          onChange={() => handleSortChange('cheap')}
        />
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>

      <label className={`${styles.tab} ${sortBy === 'fast' && styles.active}`}>
        <input
          className={styles.input}
          type="radio"
          name="sorting"
          value="fast"
          checked={sortBy === 'fast'}
          onChange={() => handleSortChange('fast')}
        />
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>

      <label className={`${styles.tab} ${sortBy === 'optimal' && styles.active}`}>
        <input
          className={styles.input}
          type="radio"
          name="sorting"
          value="optimal"
          checked={sortBy === 'optimal'}
          onChange={() => handleSortChange('optimal')}
        />
        <span>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}

export default SortingTabs
