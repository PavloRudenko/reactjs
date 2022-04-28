import React, { FC } from 'react'

import { concatClasses } from '../../../../../utils'
import { MenuIcon } from '../../../Icons'

import styles from './MenuButton.css'

interface Props {
  className?: string
}

const MenuButton: FC<Props> = ({ className }) => (
  <button className={concatClasses(styles.menuButton, className)}>
    <MenuIcon />
  </button>
)

export default MenuButton
