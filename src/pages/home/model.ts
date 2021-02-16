import { createGate } from 'effector-react'
import { checkIsAuthenticated } from 'features/session'

export const HomeGate = createGate()

checkIsAuthenticated({ when: HomeGate.open })
