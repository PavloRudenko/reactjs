import React, { FC } from 'react'

import * as Icons from './Icons'

export type TIconsKeys = keyof typeof Icons

interface Props {
  name: TIconsKeys
  width: number
  height?: number
}

const Icon: FC<Props> = ({ name, width, height = width }) => {
  const As = Icons[name]

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <As />
    </svg>
  )
}

export default Icon
