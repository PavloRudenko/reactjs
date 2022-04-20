import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'

import { Header } from './shared/Header'

import styles from './app.css'

const AppComponent = () => (
  <div className={styles.app}>
    <h1 className={styles.app}>Hello React</h1>
    <Header />
  </div>
)

export const App = hot(AppComponent)
