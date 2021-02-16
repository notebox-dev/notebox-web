import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'

import { Application } from './application'

hydrate(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
