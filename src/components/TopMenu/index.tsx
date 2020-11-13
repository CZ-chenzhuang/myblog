import React from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import './style.less'
import LeftMenu from './LeftMenu'
import RightSet from './RightSet'
interface Iprops {
  history: RouteConfigComponentProps
}

const Header: React.FC<Iprops> = (props) => {
  const { history } = props
  return (
    <div className="header">
      <LeftMenu></LeftMenu>
      <RightSet history={history} ></RightSet>
    </div>
  )
}

export default Header