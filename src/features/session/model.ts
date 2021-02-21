import { createStore, createEvent, createEffect, forward } from 'effector'

export const sessionLoad = createEvent()

// TODO: Fix any type
export const $session = createStore<any | null>(null)

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
