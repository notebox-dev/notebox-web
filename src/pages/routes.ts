import { RouteConfig } from 'react-router-config'

import { HomePage } from './home/page'
import { LoginPage } from './login/page'
import { NotFoundPage } from './not-found/page'

// TODO: Make lazy all routes.
export const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]
