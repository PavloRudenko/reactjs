import React, { FC } from 'react'

import ActionButton from './ActionButton'
import KarmaCounter from './KarmaCounter'
import CommentsButton from './CommentsButton'
import { ChareIcon, SaveIcon } from '../../../Icons'
import { concatClasses } from '../../../../../utils'

import styles from './Controls.css'

const ACTIONS_BUTTONS = [
  {
    key: 0,
    text: 'Поделиться',
    className: styles.chareButton,
    icon: <ChareIcon />,
  },
  {
    key: 1,
    text: 'Сохранить',
    icon: <SaveIcon />,
  },
]

interface Props {
  karmaCount: number
  commentsCount: number
  className?: string
}

const Controls: FC<Props> = ({ karmaCount, commentsCount, className }) => (
  <div className={concatClasses(styles.controls, className)}>
    <KarmaCounter count={karmaCount} className={styles.karmaCounter} />
    <CommentsButton count={commentsCount} className={styles.commentsButton} />
    <div className={styles.actions}>
      {ACTIONS_BUTTONS.map(btn => (
        <ActionButton {...btn} />
      ))}
    </div>
  </div>
)

export default Controls
