import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import ParticlesBg from 'particles-bg'
import { setLogin } from './sotre/actionCreators'
import LoginLayout from './login-layout'
import './index.less'
interface Iprops {

}

const Login: React.FC<Iprops> = (props) => {
  const dispatch = useDispatch()
  const handleLogin = (value: object) => {
    dispatch(setLogin(value))
  }

  return (
    <div className="login">
      <LoginLayout fetch={handleLogin}></LoginLayout>
      <ParticlesBg type="circle" bg={true} />
    </div>
  )
}
export default memo(Login)