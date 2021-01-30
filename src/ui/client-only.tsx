import { FC, ReactElement, useState, useEffect } from 'react'

export const ClientOnly: FC = (props) => {
  const { children } = props
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (isMounted ? children : null) as ReactElement
}
