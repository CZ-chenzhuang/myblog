import { message } from 'antd';
import * as actionTypes from './constants'
import { login } from '@/http/user'

export const loginAction = (data: object)=> ({
  type: actionTypes.login,
  data
})

export const signOut = () => ({
  type: actionTypes.signOut
})

export const changeLoading = () => ({
  type: actionTypes.changeLoading
})

export const setLogin = (userInfo: object) => {
  return async (dispatch: any) => {
    let res = await login(userInfo)
    if (res.errorCode === 0) {
      dispatch(loginAction(userInfo))
      return
    }
    message.error('登陆失败！');
  }
}