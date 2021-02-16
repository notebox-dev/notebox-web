import { createStore, guard } from 'effector'
import { pushHistoryFx } from 'lib/history';
import { paths } from 'pages/paths';

// TODO: Export from session api.
export type Session = {
  email: string
}

export const $session = createStore<Session | null>(null)

const $isAuthenticated = $session.map((user) => user !== null);
const $isNotAuthenticated = $session.map((user) => user === null);

export function checkIsAuthenticated({ when }: any) {
  guard({
    source: when,
    filter: $isNotAuthenticated,
    target: pushHistoryFx.prepend(paths.login),
  })
}
