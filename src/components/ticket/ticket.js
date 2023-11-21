import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { format, addMinutes } from 'date-fns'

import formatStops from '../../helpers/format-stops'
import formatDuration from '../../helpers/format-duration'

import styles from './ticket.module.scss'

const formatFlightDuration = (startTime, duration) => {
  const startDateTime = new Date(startTime)
  const endDateTime = addMinutes(startDateTime, duration)

  const formattedStartTime = format(startDateTime, 'HH:mm')
  const formattedEndTime = format(endDateTime, 'HH:mm')

  return `${formattedStartTime} – ${formattedEndTime}`
}

function Ticket({ ticket }) {
  const { carrier, price, segments } = ticket

  return (
    <>
      <h3 className={styles.price_logo}>
        <span className={styles.price}>{price} Р</span>
        <img className={styles.logo} alt="logo" src={`https://pics.avs.io/160/40/${carrier}.png`} />
      </h3>

      {segments.map((segment) => (
        <p key={uuidv4()} className={styles.information}>
          <span className={`${styles.text} ${styles.gray_text}`}>
            {segment.origin} – {segment.destination}
          </span>
          <span className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</span>
          <span className={`${styles.text} ${styles.gray_text}`}>{formatStops(segment.stops)}</span>

          <span className={styles.text}>{formatFlightDuration(segment.date, segment.duration)}</span>
          <span className={styles.text}>{formatDuration(segment.duration)}</span>
          <span className={styles.text}>{segment.stops.join(', ')}</span>
        </p>
      ))}
    </>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    carrier: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default Ticket
