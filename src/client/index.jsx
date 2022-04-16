import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Header } from '../shared/Header'

document.addEventListener('DOMContentLoaded', () => {
  hydrateRoot(document.getElementById('react_root'), <Header />)
})
