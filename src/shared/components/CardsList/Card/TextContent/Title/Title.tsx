import React, { FC } from 'react'

import { concatClasses } from '../../../../../../utils'

import styles from './Title.css'

interface Props {
  title: string
  postUrl: string
  className?: string
}

const Title: FC<Props> = ({ title, postUrl, className }) => (
  <h2 className={concatClasses(styles.title, className)}>
    <a href={postUrl} className={styles.postLink}>
      {title}
    </a>
  </h2>
)

export default Title
