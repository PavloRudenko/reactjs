import { ReactNode } from 'react'

import { EColor } from '../../constants'

export type TWeight = 400 | 500
export type TSizes = 28 | 20 | 16 | 14 | 12 | 10
export interface IText {
  As?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  children?: ReactNode
  size?: TSizes
  tSize?: TSizes
  dSize?: TSizes
  color?: EColor
  weight?: TWeight
  tWeight?: TWeight
  dWeight?: TWeight
  className?: string
}
