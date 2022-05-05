export const pipe =
  <U>(...fns: Function[]) =>
  (initValue: any): U =>
    fns.reduce((pre, fn) => fn(pre), initValue)
