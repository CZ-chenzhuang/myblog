import React from 'react'
import './style.less'
import { Menu } from 'antd';
import LeftMenu from './LeftMenu'
import RightSet from './RightSet'
interface Iprops {

}

const Header: React.FC<Iprops> = (props) => {
  return (
    <div className="header">
      <LeftMenu></LeftMenu>
      <RightSet></RightSet>
    </div>
  )
}

export default Header