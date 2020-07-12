import React from 'react'
import PickColor from '../PickColor'
import { Avatar, Badge, Menu, Dropdown, message } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons'
interface Iprops {

}

const RightMenu: React.FC<Iprops> = (props) => {
  const userMenu = (
    <Menu>
      <Menu.Item onClick={() => message.info('你点击了修改密码')}>修改密码</Menu.Item>
      <Menu.Item onClick={() => message.info('你点击了系统设置')}>系统设置</Menu.Item>
      <Menu.Item onClick={() => message.info('你点击了清除缓存')}>清除缓存</Menu.Item>
      <Menu.Item onClick={() => message.info('你点击了退出登录')}>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <div className="header-right">
      <PickColor></PickColor>

      <span className="header-right-lang">简体中文</span>

      <div className="header-right-userInfo">
        <Badge count={1}>
          <Avatar icon={<UserOutlined />} />
        </Badge>
      </div>

      <div className="header-right-set">
        <Dropdown
          overlay={userMenu}
          trigger={['hover']}
        >
          <span className="name">
            超级管理员
            <CaretDownOutlined />
          </span>
        </Dropdown>
      </div>      
    </div>
  )
}

export default RightMenu