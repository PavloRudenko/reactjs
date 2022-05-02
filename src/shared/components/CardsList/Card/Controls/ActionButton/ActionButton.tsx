import React, { FC, ReactNode } from 'react'

import { concatClasses } from '../../../../../../utils'

import styles from './ActionButton.css'

interface Props {
  id: number
  icon?: ReactNode
  className?: string
  text: string
}

const ActionButton: FC<Props> = ({ icon, className, text }) => (
  <button className={concatClasses(styles.actionButton, className)}>
    {icon}
    <span className={styles.actionText}>{text}</span>
  </button>
)

export default ActionButton
