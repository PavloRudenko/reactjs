import { assignId } from '.'

export const generateRandomString = (): string =>
  Math.random().toString(36).substring(2, 15)

export const generateId = <O extends {}>(obj: O) =>
  assignId(obj, generateRandomString())
