import React, { FC } from 'react'

import styles from './SortBlock.css'

interface SortBlockProps {}

const SortBlock: FC<SortBlockProps> = () => (
  <div className={styles.sortBlock}>SortBlock Component</div>
)

export default SortBlock
