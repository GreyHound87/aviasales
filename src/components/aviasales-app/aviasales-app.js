import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../../redux/slices/tickets-slice'
import Header from '../header/header'
import SideBar from '../side-bar/side-bar'
import Main from '../main/main'

import styles from './aviasales-app.module.scss'

function AviaSalesApp() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.tickets.searchId)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId))
    }
  }, [dispatch, searchId])

  return (
    <section className={styles.body}>
      <Header />
      <SideBar />
      <Main />
    </section>
  )
}

export default AviaSalesApp
