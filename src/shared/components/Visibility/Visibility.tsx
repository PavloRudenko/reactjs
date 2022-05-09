import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useIsMounted } from '../../hooks/useIsMounted'

export enum EScreen {
  mobile = 0,
  tablet = 1024,
  desktop = 1540,
}

interface Props {
  screen?: EScreen
  children: ReactNode
}

const Visibility: FC<Props> = ({ children, screen = EScreen.mobile }) => {
  const isMounted = useIsMounted()
  const [width, setWidth] = useState<number>()
  const isShow = width && width >= screen

  const handleSetWidth = () => setWidth(window.innerWidth)

  useEffect(() => {
    if (isMounted) {
      window.addEventListener('resize', handleSetWidth)
    }
    handleSetWidth()
    return () => {
      window.removeEventListener('resize', handleSetWidth)
    }
  }, [width])

  return <>{isShow && children}</>
}

export default Visibility
