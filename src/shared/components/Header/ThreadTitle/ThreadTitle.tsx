import React, { FC } from 'react'

import styles from './ThreadTitle.css'

interface ThreadTitleProps {}

const ThreadTitle: FC<ThreadTitleProps> = () => (
  <h1 className={styles.threadTitle}>ThreadTitle Component</h1>
)

export default ThreadTitle
