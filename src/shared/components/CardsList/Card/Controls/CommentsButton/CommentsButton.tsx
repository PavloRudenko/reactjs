import React, { FC } from 'react'

import Icon from '../../../../Icon'
import Text from '../../../../Text'
import { EColor } from '../../../../../constants'
import { concatClasses } from '../../../../../../utils'

import styles from './CommentsButton.css'

interface Props {
  count: number
  className?: string
}

const CommentsButton: FC<Props> = ({ count, className }) => (
  <button className={concatClasses(styles.commentsButton, className)}>
    <Icon name={'CommentsIcon'} width={15} />
    <Text
      color={EColor.greyC4}
      weight={500}
      size={12}
      className={styles.number}
    >
      {count}
    </Text>
  </button>
)

export default CommentsButton
