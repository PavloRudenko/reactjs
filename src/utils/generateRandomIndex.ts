import { assoc } from './assoc'

export const generateRandomString = (): string =>
  Math.random().toString(36).substring(2, 15)

export const assignId = assoc('id')

export const generateId = <O extends {}>(obj: O) =>
  assignId(obj, generateRandomString())
