import React, { FC } from 'react'

import Title from './Title'
import MetaData from './MetaData'
import { concatClasses } from '../../../../../utils'

import styles from './TextContent.css'

interface IMetaData {
  username: string
  publishedLabel: string
  avatarSrc: string
  userUrl: string
}

interface IPost {
  title: string
  postUrl: string
}

interface Props {
  metaData: IMetaData
  postData: IPost
  className?: string
}

const TextContent: FC<Props> = ({ metaData, postData, className }) => (
  <div className={concatClasses(styles.textContent, className)}>
    <MetaData {...metaData} className={styles.metaData} />
    <Title {...postData} className={styles.title} />
  </div>
)

export default TextContent
