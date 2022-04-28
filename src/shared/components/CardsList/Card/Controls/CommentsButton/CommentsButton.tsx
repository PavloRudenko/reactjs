import React, { FC } from 'react'

import { CommentsIcon } from '../../../../Icons'
import { concatClasses } from '../../../../../../utils'

import styles from './CommentsButton.css'

interface Props {
  count: number
  className?: string
}

const CommentsButton: FC<Props> = ({ count, className }) => (
  <button className={concatClasses(styles.commentsButton, className)}>
    <CommentsIcon />
    <span className={styles.number}>{count}</span>
    <span className={styles.text}>Комментарии</span>
  </button>
)

export default CommentsButton
