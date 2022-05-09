import React, { FC } from 'react'

import { concatClasses } from '../../../../../utils'
import Icon from '../../../Icon'

import styles from './MenuButton.css'

interface Props {
  className?: string
}

const MenuButton: FC<Props> = ({ className }) => (
  <button className={concatClasses(styles.menuButton, className)}>
    <Icon name={'MenuIcon'} width={20} height={5} />
  </button>
)

export default MenuButton
