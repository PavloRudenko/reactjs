import React, { FC } from 'react'

import TextContent from './TextContent'
import Preview from './Preview'
import Menu from './Menu'
import Controls from './Controls'
import { ICard } from '.'

import styles from './Card.css'

interface Props extends ICard {
  className?: string
}

const Card: FC<Props> = ({ metaData, postData, controlsData, className }) => {
  return (
    <li className={styles.card}>
      <TextContent
        className={styles.textContent}
        metaData={metaData}
        postData={postData}
      />
      <Preview className={styles.preview} imageUrl={postData.imageUrl} />
      <Menu className={styles.menuButton} />
      <Controls {...controlsData} />
    </li>
  )
}

export default Card
