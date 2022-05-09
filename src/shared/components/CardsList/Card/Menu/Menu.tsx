import React, { FC, ReactNode } from 'react'

import MenuButton from '../MenuButton'
import Dropdown from '../../../Dropdown'
import GenericList from '../../../GenericList'
import { IItem } from '../../../GenericList/GenericList'
import Icon, { TIconsKeys } from '../../../Icon'
import ActionButton, { IActionButton } from '../Controls/ActionButton'
import Visibility, { EScreen } from '../../../Visibility'
import {
  concatClasses,
  generateId,
  pipe,
  assignClassName,
  assignAs,
  assignOnClick,
  assignChildren,
  assignIcon,
} from '../../../../../utils'

import styles from './Menu.css'

const addClassName =
  <T extends string>(className: T) =>
  <O extends {}>(obj: O) =>
    assignClassName(obj, className)

const addAs =
  <T extends IItem['As']>(As: T) =>
  <O extends {}>(obj: O) =>
    assignAs(obj, As)

const addOnClick =
  <F extends (id: string) => void>(fn: F) =>
  <O extends {}>(obj: O) =>
    assignOnClick(obj, fn)

const addChildren =
  <R extends ReactNode>(child: R) =>
  <O extends {}>(obj: O) =>
    assignChildren(obj, child)

const addActionButton = <O extends {}>(props: O) =>
  addChildren(
    <Visibility {...props}>
      <ActionButton className={styles.actionButton} {...props} />
    </Visibility>
  )(props)

const addIcon =
  (width: number) =>
  <O extends { name: TIconsKeys }>(props: O) =>
    assignIcon(props, <Icon {...props} width={width} />)

type TActionButton = IActionButton & {
  screen?: EScreen
  name: TIconsKeys
}

const ActionButtons: TActionButton[] = [
  {
    text: 'Комментарии',
    name: 'CommentsIcon',
    screen: EScreen.tablet,
  },
  {
    text: 'Поделиться',
    name: 'ChareWithoutBGIcon',
    screen: EScreen.tablet,
  },
  {
    text: 'Скрыть',
    name: 'HiddenIcon',
  },
  {
    text: 'Сохранить',
    name: 'SaveWithoutBGIcon',
    screen: EScreen.tablet,
  },
  {
    text: 'Пожаловаться',
    name: 'ComplainIcon',
  },
]

interface Props {
  className?: string
}

const Menu: FC<Props> = ({ className }) => (
  <Dropdown
    listClassName={styles.list}
    className={className}
    button={<MenuButton />}
  >
    <GenericList
      list={ActionButtons.map(
        pipe<IItem>(
          generateId,
          addIcon(15),
          addActionButton,
          addClassName(styles.item),
          addAs('li'),
          addOnClick((id: string) => console.log(id))
        )
      )}
    />
    <ActionButton
      className={concatClasses(styles.actionButton, styles.close)}
      text={'Закрыть'}
    />
  </Dropdown>
)

export default Menu
