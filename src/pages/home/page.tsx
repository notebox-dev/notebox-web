import React, { FC } from 'react'
import { useGate } from 'effector-react'

import { HomeGate } from './model'

export const HomePage: FC = () => {
  useGate(HomeGate)

  return <div>Home page</div>
}
