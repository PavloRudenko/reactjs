import React, { FC } from 'react'
import classNames from 'classnames'
import { IText } from './Text.type'

import styles from './Text.css'

const Text: FC<IText> = ({
  As = 'span',
  children,
  size,
  tSize,
  dSize,
  color = '',
  weight,
  tWeight,
  dWeight,
  className = '',
}) => {
  const classes = classNames(
    { [styles[`s${size}`]]: size },
    {
      [styles[`t${tSize}`]]: tSize,
    },
    {
      [styles[`d${dSize}`]]: dSize,
    },
    { [styles[color]]: color },
    { [styles[`weight${weight}`]]: weight },
    { [styles[`tWeight${tWeight}`]]: tWeight },
    { [styles[`dWeight${dWeight}`]]: dWeight },
    { [className]: className }
  )

  return <As className={classes}>{children}</As>
}

export default Text
