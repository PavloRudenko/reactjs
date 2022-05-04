import React, { FC } from 'react'

import { concatClasses } from '../../../../../../utils'
import { IMetaData } from '.'

import styles from './MetaData.css'

interface Props extends IMetaData {
  className?: string
}

const MetaData: FC<Props> = ({
  className,
  avatarSrc,
  userUrl,
  publishedLabel,
  username,
}) => (
  <div className={concatClasses(styles.metaData, className)}>
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={avatarSrc}
        alt={`Avatar ${username}`}
      />
      <a href={userUrl} className={styles.username}>
        {username}
      </a>
    </div>
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      {publishedLabel}
    </span>
  </div>
)

export default MetaData