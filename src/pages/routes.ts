import { RouteConfig } from 'react-router-config'

import { HomePage } from './home/page'
import { LoginPage } from './login/page'
import { NotFoundPage } from './not-found/page'
import { paths } from './paths'

// TODO: Make lazy all routes.
export const routes: RouteConfig[] = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage,
  },
  {
    path: paths.login(),
    exact: true,
    component: LoginPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]
