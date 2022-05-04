import { SyntheticEvent } from 'react'

export const pickFromSyntheticEvent =
  <T extends HTMLElement>() =>
  <K extends keyof T>(key: K) =>
  <F extends (t: T[K]) => void>(fn: F) =>
  (e: SyntheticEvent<T>) =>
    fn(e.currentTarget[key])

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
