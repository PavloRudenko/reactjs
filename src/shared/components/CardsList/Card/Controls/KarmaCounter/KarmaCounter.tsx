import React, { FC } from 'react'

import { ArrowIcon } from '../../../../Icons'
import { concatClasses } from '../../../../../../utils'
import Text from '../../../../Text'
import { EColor } from '../../../../../constants'

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
    <Text size={12} tSize={14} weight={500} tWeight={400} color={EColor.greyC4}>
      {count}
    </Text>
    <button className={styles.down}>
      <ArrowIcon />
    </button>
  </div>
)

export default KarmaCounter
