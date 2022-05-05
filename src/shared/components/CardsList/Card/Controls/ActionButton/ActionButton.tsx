import React, { FC } from 'react'

import { IActionButton } from '.'

import { concatClasses } from '../../../../../../utils'

import styles from './ActionButton.css'

interface Props extends IActionButton {}

const ActionButton: FC<Props> = ({ icon, className, text }) => (
  <button className={concatClasses(styles.actionButton, className)}>
    {icon}
    {text && <span className={styles.actionText}>{text}</span>}
  </button>
)

export default ActionButton
