import React, { FC } from 'react'

import ActionButton, { IActionButton } from './ActionButton'
import KarmaCounter from './KarmaCounter'
import CommentsButton from './CommentsButton'
import { ChareIcon, SaveIcon } from '../../../Icons'
import { concatClasses, generateId, merge } from '../../../../../utils'
import { IControls } from '.'

import styles from './Controls.css'
import { withIdKey } from '../../CardsList'

const ACTIONS_BUTTONS: IActionButton[] = [
  {
    text: 'Поделиться',
    className: styles.chareButton,
    icon: <ChareIcon />,
  },
  {
    text: 'Сохранить',
    icon: <SaveIcon />,
  },
].map(generateId)

interface Props extends IControls {
  className?: string
}

const Controls: FC<Props> = ({ karmaCount, commentsCount, className }) => (
  <div className={concatClasses(styles.controls, className)}>
    <KarmaCounter count={karmaCount} className={styles.karmaCounter} />
    <CommentsButton count={commentsCount} className={styles.commentsButton} />
    <div className={styles.actions}>
      {ACTIONS_BUTTONS.map(withIdKey(ActionButton))}
    </div>
  </div>
)

export default Controls
