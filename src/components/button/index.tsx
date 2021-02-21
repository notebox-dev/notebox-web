import React, { FC, useRef } from 'react'
import { useButton } from 'react-aria'
import styled from 'styled-components'

interface ButtonProps {
  type?: any
}

export const Button: FC<ButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children } = props

  return (
    <Control {...buttonProps} ref={ref}>
      {children}
    </Control>
  )
}

const Control = styled.button``
