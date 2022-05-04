import React, { FC, ReactNode, useEffect, useState } from 'react'

import { concatClasses, noop } from '../../../utils'
import { useIsMounted } from '../../hooks/useIsMounted'

import styles from './Dropdown.css'

interface Props {
  button: ReactNode
  children: ReactNode
  className?: string
  listClassName?: string
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const Dropdown: FC<Props> = ({
  button,
  children,
  className,
  listClassName,
  isOpen,
  onOpen = noop,
  onClose = noop,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={concatClasses(styles.dropdown, className)}>
      <div id="test_dropdown" onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <ul
          className={concatClasses(styles.list, listClassName)}
          onClick={() => setIsDropdownOpen(false)}
        >
          {children}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
