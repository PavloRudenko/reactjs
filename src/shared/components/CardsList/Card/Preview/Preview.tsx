import React, { FC } from 'react'

import { IPreview } from '.'

interface Props extends IPreview {
  className?: string
}

const Preview: FC<Props> = ({ imageUrl, className }) => (
  <div className={className}>
    <img src={imageUrl} />
  </div>
)

export default Preview
