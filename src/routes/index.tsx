import Main from '../components/Main'
import Login from '../pages/login'
import workRouter from './config/work.router'
import blogRouter from './config/blog.router'
import personRouter from './config/person.router'

export default [
  {
    path: '/',
    component:Main,
    routes: [
      workRouter,
      blogRouter,
      personRouter
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
