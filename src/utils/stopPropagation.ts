import { SyntheticEvent } from 'react'

export const stopPropagation =
  <T extends (e: any) => void>(fn: T) =>
  <E extends SyntheticEvent<any>>(e: E) => {
    e.stopPropagation()
    fn(e)
  }
