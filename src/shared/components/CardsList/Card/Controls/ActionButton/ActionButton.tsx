import React, { FC } from 'react'

import { IActionButton } from '.'

import { concatClasses } from '../../../../../../utils'
import { EColor } from '../../../../../constants'
import Text from '../../../../Text'

import styles from './ActionButton.css'

interface Props extends IActionButton {}

const ActionButton: FC<Props> = ({ icon, className, text }) => (
  <button className={concatClasses(styles.actionButton, className)}>
    {icon}
    {text && (
      <Text
        color={EColor.grey99}
        size={12}
        tSize={14}
        className={styles.actionText}
      >
        {text}
      </Text>
    )}
  </button>
)

export default ActionButton
