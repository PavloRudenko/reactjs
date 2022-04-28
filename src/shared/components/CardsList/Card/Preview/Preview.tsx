import React, { FC } from 'react'

interface Props {
  imageUrl: string
  className?: string
}

const Preview: FC<Props> = ({ imageUrl, className }) => (
  <div className={className}>
    <img src={imageUrl} />
  </div>
)

export default Preview
