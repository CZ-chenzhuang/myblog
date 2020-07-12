import Main from '../components/Main'
import Login from '../pages/login'

export default [
  {
    path: '/',
    exact: true,
    component:Main
  },
  {
    path: '/login',
    component: Login
  }
]
