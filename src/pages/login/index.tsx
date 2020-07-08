import React, { memo } from 'react'
import ParticlesBg from 'particles-bg'
import './index.less'
interface Iprops {

}

const Login: React.FC<Iprops> = (props) => {
  return (
    <div className="login">
      <ParticlesBg type="circle" bg={true} />
    </div>
  )
}
export default Login