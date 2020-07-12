import React, { useState } from 'react'
import './style.less'
import TopMenu from '../TopMenu'
// import RightMenu from '../RightMenu'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

interface Iprops {

}

const Main: React.FC<Iprops> = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }


  return (
    <Layout className="main">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="main-logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
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
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main