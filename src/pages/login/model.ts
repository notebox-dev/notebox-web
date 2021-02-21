import { createStore, forward } from 'effector'
import { createForm } from 'effector-forms'
import { createGate } from 'effector-react'

import { checkIsNotAuthenticated, sessionSaveFx } from 'features/session'
import { sessionCreateFx } from 'api/session'
import { pushHistoryFx } from 'lib/history'
import { paths } from 'pages/paths'

export const LoginGate = createGate()

export const loginForm = createForm({
  fields: {
    email: { init: '' },
    password: { init: '' },
  },
})

export const $loginFormPending = sessionCreateFx.pending
export const $loginFormError = createStore('')

$loginFormError
  .reset(loginForm.formValidated)
  .on(sessionCreateFx.failData, (_, { body }: any) => body.error.message)

checkIsNotAuthenticated({ when: LoginGate.open })

forward({ from: loginForm.formValidated, to: sessionCreateFx })
forward({ from: sessionCreateFx.doneData, to: sessionSaveFx })
forward({ from: sessionSaveFx.done, to: pushHistoryFx.prepend(paths.home) })
