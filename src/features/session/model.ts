import { Unit, createStore, guard, createEvent, createEffect, forward } from 'effector'
import { pushHistoryFx } from 'lib/history'
import { paths } from 'pages/paths'

export const sessionLoad = createEvent()

// TODO: Fix any type
export const $session = createStore<any | null>(null)

const $isAuthenticated = $session.map((user) => user !== null)
const $isNotAuthenticated = $session.map((user) => user === null)

const sessionLoadFx = createEffect(() => {
  try {
    const item = localStorage.getItem('session')
    if (!item) {
      throw new Error()
    }
    const session = JSON.parse(item)
    return session
  } catch (e) {}
})

// TODO: Fix any type
export const sessionSaveFx = createEffect((body: any) => {
  localStorage.setItem('session', JSON.stringify(body))
  return body
})

$session
  .on(sessionLoadFx.fail, () => null)
  .on(sessionSaveFx.doneData, (_, payload) => payload)
  .on(sessionLoadFx.doneData, (_, payload) => payload)

forward({ from: sessionLoad, to: sessionLoadFx })

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
