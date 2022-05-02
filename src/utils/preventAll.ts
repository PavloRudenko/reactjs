import { stopPropagation, preventDefault } from '.'

export const preventAll = <T extends (e: any) => void>(fn: T) =>
  preventDefault(stopPropagation(fn))
