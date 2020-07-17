import Person from '@/pages/Person'

export default {
  path: '/person',
  component: Person,
  routes: [
    {
      path: '/blog/tag'
    },
    {
      path: '/blog/article'
    }
  ]
}