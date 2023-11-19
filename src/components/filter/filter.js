import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilter } from '../../redux/slices/filters-slice'

import styles from './filter.module.scss'

function Filter() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters.filters)

  const filterLabels = {
    all: 'Все',
    nullTransfer: 'Без пересадок',
    oneTransfer: '1 пересадка',
    twoTransfer: '2 пересадки',
    threeTransfer: '3 пересадки',
  }

  const handleCheckboxChange = (filterName) => {
    dispatch(setFilter({ filterName, value: !filters[filterName] }))
  }

  return (
    <form className={styles.container}>
      <fieldset className={styles.filters}>
        <legend className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>

        {Object.entries(filters).map(([filterName, isChecked]) => (
          <label key={filterName} className={styles.label}>
            <input
              type="checkbox"
              id={filterName}
              name={filterName}
              className={styles.checkbox}
              checked={isChecked}
              onChange={() => handleCheckboxChange(filterName)}
            />
            <span className={styles.text}>{filterLabels[filterName]}</span>
          </label>
        ))}
      </fieldset>
    </form>
  )
}

export default Filter
