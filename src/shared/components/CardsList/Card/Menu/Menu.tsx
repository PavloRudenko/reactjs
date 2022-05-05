import React, { FC, ReactNode } from 'react'

import MenuButton from '../MenuButton'
import Dropdown from '../../../Dropdown'
import GenericList from '../../../GenericList'
import { IItem } from '../../../GenericList/GenericList'
import { ComplainIcon, HiddenIcon } from '../../../Icons'
import ActionButton, { IActionButton } from '../Controls/ActionButton'
import {
  concatClasses,
  generateId,
  pipe,
  assignClassName,
  assignAs,
  assignOnClick,
  assignChildren,
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
  addChildren(<ActionButton {...props} />)(props)

const ActionButtons: IActionButton[] = [
  {
    text: 'Скрыть',
    icon: <HiddenIcon />,
  },
  {
    text: 'Пожаловаться',
    icon: <ComplainIcon />,
  },
]

interface Props {
  className?: string
  isCloseButton?: boolean
}

const Menu: FC<Props> = ({ className, isCloseButton = true }) => (
  <Dropdown
    listClassName={styles.list}
    className={className}
    button={<MenuButton />}
  >
    <GenericList
      list={ActionButtons.map(
        pipe<IItem>(
          generateId,
          addActionButton,
          addClassName(styles.item),
          addAs('li'),
          addOnClick((id: string) => console.log(id))
        )
      )}
    />
    {isCloseButton && (
      <ActionButton
        className={concatClasses(styles.item, styles.close)}
        text={'Закрыть'}
      />
    )}
  </Dropdown>
)

export default Menu
