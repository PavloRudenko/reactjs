export const assoc =
  <K extends string>(key: K) =>
  <O extends {}, T>(obj: O, value: T) =>
    ({ ...obj, [key]: value } as K extends keyof O
      ? Omit<O, K> & Record<K, T>
      : O & Record<K, T>)
