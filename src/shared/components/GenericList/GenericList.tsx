import React, { FC, ReactNode } from 'react'
import { noop } from '../../../utils'

export interface IItem {
  children: ReactNode
  id: string
  onClick: (id: string) => void
  className?: string
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
}

interface Props {
  list: IItem[]
}

const GenericList: FC<Props> = ({ list }) => (
  <>
    {list.map(
      ({ As = 'div', children, onClick = noop, id, className, href }) => (
        <As
          className={className}
          key={id}
          onClick={() => onClick(id)}
          href={href}
        >
          {children}
        </As>
      )
    )}
  </>
)

export default GenericList
