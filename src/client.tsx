import React from 'react'
import { Router } from 'react-router'
import { hydrate } from 'react-dom'

import { sessionLoad } from 'features/session'
import { history } from './lib/history'
import { Application } from './application'

sessionLoad()

// TODO: Hydrate after session loaded.
hydrate(
  // @ts-expect-error
  <Router history={history}>
    <Application />
  </Router>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
