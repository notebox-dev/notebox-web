import React from 'react'
import { Router } from 'react-router'
import { hydrate } from 'react-dom'

import { history } from './lib/history'
import { Application } from './application'

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
