import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import ParticlesBg from 'particles-bg'
import { Redirect } from 'react-router-dom'
import { setLogin } from './sotre/actionCreators'
import LoginLayout from './login-layout'
import { useSelector } from 'react-redux'
import './index.less'
interface Iprops {

}

const Login: React.FC<Iprops> = (props) => {
  const { isLogin, loading } = useSelector((state: any) => state.login)
  console.log(isLogin, loading)
  const dispatch = useDispatch()
  const handleLogin = (value: object) => {
    dispatch(setLogin(value))
  }

  if (isLogin) {
    return <Redirect to="/aaa"></Redirect>
  }

  return (
    <div className="login">
      <LoginLayout fetch={handleLogin} loading={loading}></LoginLayout>
      <ParticlesBg type="circle" bg={true} />
    </div>
  )
}
export default memo(Login)