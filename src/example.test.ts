import { myConcatStr } from './example'

describe('concatStr', () => {
  test("should return 'Hello World'", () => {
    expect(myConcatStr('Hello', 'World')).toBe('Hello World')
  })
  test("should return 'Hello React and TS'", () => {
    expect(myConcatStr('Hello', 'React', 'and', 'TS')).toBe(
      'Hello React and TS'
    )
  })
  test('should return string', () => {
    const result = myConcatStr(
      Math.random().toString(35),
      Math.random().toString(35)
    )
    expect(typeof result).toBe('string')
  })
})
