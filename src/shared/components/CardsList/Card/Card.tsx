import React, { FC } from 'react'

import TextContent from './TextContent'
import Preview from './Preview'
import MenuButton from './MenuButton'
import Controls from './Controls'

import styles from './Card.css'

interface IMetaData {
  username: string
  publishedLabel: string
  avatarSrc: string
  userUrl: string
}

interface IPost {
  title: string
  postUrl: string
  imageUrl: string
}

interface IControls {
  karmaCount: number
  commentsCount: number
}

export interface ICard {
  id: number
  metaData: IMetaData
  postData: IPost
  controlsData: IControls
}

interface Props {
  data: ICard
}

const Card: FC<Props> = ({ data: { metaData, postData, controlsData } }) => {
  return (
    <li className={styles.card}>
      <TextContent
        className={styles.textContent}
        metaData={metaData}
        postData={postData}
      />
      <Preview className={styles.preview} imageUrl={postData.imageUrl} />
      <MenuButton className={styles.menuButton} />
      <Controls {...controlsData} />
    </li>
  )
}

export default Card
