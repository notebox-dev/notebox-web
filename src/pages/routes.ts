import { RouteConfig } from 'react-router-config'

import { HomePage } from './home/page'
import { LoginPage } from './login/page'

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
]
