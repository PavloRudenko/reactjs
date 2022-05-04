export const merge =
  <O extends {}>(obj: O) =>
  <K extends {}>(obj2: K) => ({ ...obj, ...obj2 })
