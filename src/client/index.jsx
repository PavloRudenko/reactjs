import React from 'react'
import { hydrate } from 'react-dom'
import { Header } from '../shared/Header'

document.addEventListener('DOMContentLoaded', () => {
  hydrate(<Header />, document.getElementById('react_root'))
})
