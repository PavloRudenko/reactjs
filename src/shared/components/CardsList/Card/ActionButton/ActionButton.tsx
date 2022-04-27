import React, { FC, ReactNode } from 'react'

import { concatClasses } from '../../../../../utils'

import styles from './ActionButton.css'

interface Props {
  children?: ReactNode
  className?: string
  text: string
  count?: number
}

const ActionButton: FC<Props> = ({ children, className, text, count }) => (
  <button className={concatClasses(styles.actionButton, className)}>
    {children}
    <span className={styles.actionText}>{text}</span>
    {count && <span className={styles.actionNumber}>{count}</span>}
  </button>
)

export default ActionButton
