import { createEffect } from 'effector'

import { request } from './request'

type SessionCreate = { email: string; password: string }

export const sessionCreateFx = createEffect((form: SessionCreate) => {
  return request<{
    accessToken: string
    expiresIn: number
    refreshToken: string
    user: { email: string }
  }>({ path: '/auth/login', method: 'POST', body: form })
})
