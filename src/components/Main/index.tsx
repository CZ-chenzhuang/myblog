import React, { useState } from 'react'
import './style.less'
import { renderRoutes  } from 'react-router-config'
import Menus from '../Menus'
import TopMenu from '../TopMenu'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Header, Content } = Layout;

interface Iprops {
  route
}

const Main: React.FC<Iprops> = (props) => {
  console.log(props, 'main得props')
  const { route } = props
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="main">
      <Menus collapsed={collapsed}></Menus>

      <Layout className="main-layout">
        <Header className="main-layout-header" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <TopMenu></TopMenu>
        </Header>
        <Content
          className="main-layout-cont"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          {renderRoutes(route.routes)}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main