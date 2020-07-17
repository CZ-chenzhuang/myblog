import React from 'react'
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux'
const { Sider } = Layout;
const { SubMenu } = Menu;

interface Iprops {
  collapsed: boolean
}

const Menus: React.FC<Iprops> = (props) => {
  const { collapsed } = props
  const { menus } = useSelector((state:IState) => state.main)

  const getMenus = (menus) => (
    menus.map(item => {
      if(item.routes) {
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.name}>
            {getMenus(item.routes)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path} icon={item.icon}>{item.name}</Menu.Item>
        )
      }
    })
  )

  return (
    <Sider
      className="slider" 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
    >
      <div className="slider-logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {getMenus(menus)}
      </Menu>
    </Sider>
  )
}

export default Menus
