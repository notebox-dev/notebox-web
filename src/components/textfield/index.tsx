import React, { FC, useRef } from 'react'
import { useTextField } from 'react-aria'
import styled from 'styled-components'

interface TextFieldProps {
  name?: string
  onChange?: (value: string) => void
  label?: string
  value?: string
}

export const TextField: FC<TextFieldProps> = (props) => {
  const { label } = props
  const ref = useRef<HTMLInputElement>(null)
  const { labelProps, inputProps } = useTextField(props, ref)

  return (
    <Container>
      <Label {...labelProps}>{label}</Label>
      <Inner>
        <Control {...(inputProps as any)} ref={ref} />
      </Inner>
    </Container>
  )
}

const Container = styled.div``
const Inner = styled.div``
const Label = styled.label``
const Control = styled.input``
