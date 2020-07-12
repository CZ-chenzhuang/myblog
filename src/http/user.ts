import http from './index'

export const login = (data: object) => {
  return http.post('login', data)
}