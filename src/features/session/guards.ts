import { Unit, guard } from 'effector'
import { pushHistoryFx } from 'lib/history'
import { paths } from 'pages/paths'

import { $session } from './model';

const $isAuthenticated = $session.map((user) => user !== null)
const $isNotAuthenticated = $session.map((user) => user === null)

export function checkIsAuthenticated<T>({ when }: { when: Unit<T> }) {
  guard({
    source: when,
    filter: $isNotAuthenticated,
    target: pushHistoryFx.prepend(paths.login),
  })
}

export function checkIsNotAuthenticated<T>({ when }: { when: Unit<T> }) {
  guard({
    source: when,
    filter: $isAuthenticated,
    target: pushHistoryFx.prepend(paths.home),
  })
}
