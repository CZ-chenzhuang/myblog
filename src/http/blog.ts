import http from './index'

export const getBlogList = () => {
  return http.get('/api/blog/list')
}