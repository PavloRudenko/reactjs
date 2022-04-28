export const concatClasses = (...str: (string | undefined)[]): string =>
  str
    .filter(word => word)
    .join(' ')
    .trim()
