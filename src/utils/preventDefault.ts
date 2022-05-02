import { SyntheticEvent } from 'react'

export const preventDefault =
  <T extends (e: any) => void>(fn: T) =>
  <E extends SyntheticEvent<any>>(e: E) => {
    e.preventDefault()
    fn(e)
  }
