import React, { FC } from 'react'
import { SSRProvider } from 'react-aria'

import { Pages } from './pages'

export const Application: FC = () => (
  <>
    <SSRProvider>
      <Pages />
    </SSRProvider>
  </>
)
