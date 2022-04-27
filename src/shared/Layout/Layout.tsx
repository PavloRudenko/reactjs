import React, { FC, ReactNode } from 'react'

import styles from './layout.css'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
)

export default Layout
