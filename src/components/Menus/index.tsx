import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

interface Iprops {
  collapsed: boolean,
  history
}

const Menus: React.FC<Iprops> = (props) => {
  const { collapsed, history } = props
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
  const { menus } = useSelector((state:IState) => state.main)
  const handleClickLink = useCallback(({ key }) => {
    history.push(key)
  }, [])

  if (menus.length === 0) return null

  return (
    <Sider
      className="slider" 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
    >
      <div className="slider-logo" />
      <Menu
        onClick={handleClickLink}
        theme="dark"
        mode="inline" 
        defaultSelectedKeys={['1']}
      >
        {getMenus(menus)}
      </Menu>
    </Sider>
  )
}

export default Menus
