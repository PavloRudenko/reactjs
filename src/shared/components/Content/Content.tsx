import React, { FC, ReactNode } from 'react'

import styles from './Content.css'

interface ContentProps {
  children?: ReactNode
}

const Content: FC<ContentProps> = ({ children }) => (
  <main className={styles.content}>{children}</main>
)

export default Content
