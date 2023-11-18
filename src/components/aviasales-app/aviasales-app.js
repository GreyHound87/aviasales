import React from 'react'
import { Provider } from 'react-redux'

import store from '../../redux/store'
import Header from '../header/header'
import SideBar from '../side-bar/side-bar'
import Main from '../main/main'

import styles from './aviasales-app.module.scss'

function AviaSalesApp() {
  return (
    <Provider store={store}>
      <section className={styles.body}>
        <Header />
        <SideBar />
        <Main />
      </section>
    </Provider>
  )
}

export default AviaSalesApp
