import http from './index'

export const login = (url:string, data: object) => {
  return http.post(url, null, { age: 15 })
}