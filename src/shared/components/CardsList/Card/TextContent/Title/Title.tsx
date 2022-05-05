import React, { FC } from 'react'

import Text from '../../../../Text'
import { ITitle } from '.'

import styles from './Title.css'

interface Props extends ITitle {
  className?: string
}

const Title: FC<Props> = ({ title, postUrl, className }) => (
  <Text As="h2" weight={400} size={16} tSize={20} className={className}>
    <a href={postUrl} className={styles.postLink}>
      {title}
    </a>
  </Text>
)

export default Title
