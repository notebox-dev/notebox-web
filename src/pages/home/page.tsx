import React, { FC } from 'react'
import { useGate } from 'effector-react'

import { HomeGate } from './model'

export const HomePage: FC = (props) => {
  useGate(HomeGate, props)

  return <div>Home page</div>
}
