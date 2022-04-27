import React, { FC } from 'react'

import SearchBlock from './SearchBlock'
import ThreadTitle from './ThreadTitle'
import SortBlock from './SortBlock'

import styles from './Header.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.header}>
    <SearchBlock />
    <ThreadTitle />
    <SortBlock />
  </header>
)

export default Header
