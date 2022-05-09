import React, { FC } from 'react'

import { concatClasses } from '../../../../../../utils'
import Text from '../../../../Text'
import { EColor } from '../../../../../constants'

import styles from './KarmaCounter.css'
import Icon from '../../../../Icon'

interface Props {
  className?: string
  count: number
}

const KarmaCounter: FC<Props> = ({ className, count }) => (
  <div className={concatClasses(styles.karmaCounter, className)}>
    <button className={styles.up}>
      <Icon width={19} height={10} name={'ArrowIcon'} />
    </button>
    <Text size={12} tSize={14} weight={500} tWeight={400} color={EColor.greyC4}>
      {count}
    </Text>
    <button className={styles.down}>
      <Icon width={19} height={10} name={'ArrowIcon'} />
    </button>
  </div>
)

export default KarmaCounter
