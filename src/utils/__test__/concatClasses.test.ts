import { concatClasses } from '..'

describe('concatClasses', () => {
  test("should return 'Hello World'", () => {
    expect(concatClasses('Hello', 'World')).toBe('Hello World')
  })

  test("should return 'Hello World' without undefined and any spaces", () => {
    expect(concatClasses('Hello', 'World', undefined)).toBe('Hello World')
    expect(concatClasses('Hello', undefined, 'World')).toBe('Hello World')
    expect(concatClasses('Hello', undefined, undefined, 'World')).toBe(
      'Hello World'
    )
    expect(concatClasses(undefined, 'Hello', 'World')).toBe('Hello World')
  })
})
