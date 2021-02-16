import { createBrowserHistory } from 'history'

import { isClientEnv } from 'lib/env'

export const history = isClientEnv ? createBrowserHistory() : null
