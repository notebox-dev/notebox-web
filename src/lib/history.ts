import { createEffect } from 'effector'
import { createBrowserHistory } from 'history'

import { isClientEnv } from 'lib/env'

export const history = isClientEnv ? createBrowserHistory() : null

export const pushHistoryFx = createEffect((path: string) => {
  history?.push(path)
})
