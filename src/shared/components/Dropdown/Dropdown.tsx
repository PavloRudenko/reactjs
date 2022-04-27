import React, { FC, ReactNode, useRef, useState } from 'react'

import { concatClasses } from '../../../utils'

import styles from './Dropdown.css'

interface Props {
  button: ReactNode
  children: ReactNode
  className?: string
  listClassName?: string
}

const Dropdown: FC<Props> = ({
  button,
  children,
  className,
  listClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={concatClasses(styles.dropdown, className)}>
      <div id="test" onClick={() => setIsOpen(!isOpen)}>
        {button}
      </div>
      {isOpen && (
        <ul
          className={concatClasses(styles.list, listClassName)}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
