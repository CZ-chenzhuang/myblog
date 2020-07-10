import * as actionTypes from './constants'
import { login } from '../../../http/user'

export const loginAction = (data: object)=> ({
  type: actionTypes.login,
  data
})

export const setLogin = (userInfo: object) => {
  console.log(userInfo, '传到actions了')
  return async (dispatch: any) => {
    let res = await login('baidu/aa', userInfo)
    dispatch(loginAction(res))
  }
}