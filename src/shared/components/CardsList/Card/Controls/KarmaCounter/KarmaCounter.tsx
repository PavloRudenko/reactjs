import React, { FC } from 'react'

import { ArrowIcon } from '../../../../Icons'
import { concatClasses } from '../../../../../../utils'

import styles from './KarmaCounter.css'

interface Props {
  className?: string
  count: number
}

const KarmaCounter: FC<Props> = ({ className, count }) => (
  <div className={concatClasses(styles.karmaCounter, className)}>
    <button className={styles.up}>
      <ArrowIcon />
    </button>
    <span className={styles.karmaValue}>{count}</span>
    <button className={styles.down}>
      <ArrowIcon />
    </button>
  </div>
)

export default KarmaCounter
