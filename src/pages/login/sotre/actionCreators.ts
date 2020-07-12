import * as actionTypes from './constants'
import { login } from '@/http/user'

export const loginAction = (data: object)=> ({
  type: actionTypes.login,
  data
})

export const changeLoading = () => ({
  type: actionTypes.changeLoading
})

export const setLogin = (userInfo: object) => {
  return async (dispatch: any) => {
    let res = await login(userInfo)
    // dispatch(changeLoading())
    // setTimeout(() => {
    //   dispatch(loginAction(userInfo))
    // }, 2000)
  }
}