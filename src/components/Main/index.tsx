import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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
  route: {routes: []},
  history
}

const Main: React.FC<Iprops> = (props) => {
  const { route, history } = props
  const [collapsed, setCollapsed] = useState(false)
  const { menus } = useSelector((state:IState) => state.main)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="main">
      <Menus collapsed={collapsed} history={history}></Menus>

      <Layout className="main-layout">
        <Header className="main-layout-header" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <TopMenu history={history}></TopMenu>
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