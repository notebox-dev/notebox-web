import React, { FC } from 'react'
import { useForm } from 'effector-forms'
import { useGate, useStore } from 'effector-react'
import { TextField } from 'components/textfield'
import { Button } from 'components/button'

import { $loginFormError, $loginFormPending, loginForm, LoginGate } from './model'

export const LoginPage: FC = () => {
  useGate(LoginGate)
  const { submit, fields } = useForm(loginForm)
  const pending = useStore($loginFormPending)
  const error = useStore($loginFormError)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        submit()
      }}
    >
      <TextField {...fields.email} label="email" />
      <TextField {...fields.password} label="password" />
      {error}
      <Button type="submit">{pending ? 'Processing..' : 'Login'}</Button>
    </form>
  )
}
