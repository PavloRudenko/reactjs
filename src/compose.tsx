import React, { FC, useState } from 'react'

import { getValue, preventDefault, stopPropagation } from './utils'

const compose = <U,>(...fns: Function[]) => {
  return <E,>(initValue: any): U =>
    fns.reduceRight((pre, fn) => fn(pre), initValue)
}

const pipe = (...fns: Function[]) => {
  return (initValue: any) => fns.reduce((pre, fn) => fn(pre), initValue)
}

export const Input: FC = () => {
  const [value, setValue] = useState('')

  return (
    <input
      value={value}
      // onChange={getValue(setValue)}
      onChange={pipe(setValue)}
      // onChange={compose(setValue, getValue)}
      // onChange={pipe(preventDefault, stopPropagation, getValue, setValue)}
      // onChange={preventDefault(stopPropagation(getValue(setValue)))}
    />
  )
}
