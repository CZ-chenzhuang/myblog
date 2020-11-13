import http from './index'

export const getBlogList = () => {
  return http.get('/blog/list')
}