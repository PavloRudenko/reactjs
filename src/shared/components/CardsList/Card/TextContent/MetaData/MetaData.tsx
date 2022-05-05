import React, { FC } from 'react'

import { IMetaData } from '.'
import Text from '../../../../Text'
import { concatClasses } from '../../../../../../utils'
import { EColor } from '../../../../../constants'

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
  <Text
    As="div"
    size={10}
    tSize={14}
    className={concatClasses(styles.metaData, className)}
  >
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
    <Text color={EColor.grey99} className={styles.createdAt}>
      <Text color={EColor.grey99} className={styles.publishedLabel}>
        опубликовано{' '}
      </Text>
      {publishedLabel}
    </Text>
  </Text>
)

export default MetaData
