import React, { memo } from 'react'
import { Form, Input, Button } from 'antd';
const { Item } = Form

interface Iprops {
  fetch: any
}

const LoginLayout: React.FC<Iprops> = (props) => {
  let { fetch } = props
  const handleLogin = (value: object) => {
    fetch(value)
    console.log(value)
  }

  return (
    <div className="login-main">
      <div className="login-main-box">
        <h2>欢迎登录</h2>
        <Form
          onFinish={handleLogin}
        >
          <Item name="username">
            <Input placeholder="请输入用户名" allowClear></Input>
          </Item>
          <Item name="password">
            <Input type="password" placeholder="请输入密码" allowClear></Input>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Item>
        </Form>
        <p>其他方式登录</p>
        <div className="login-main-box_other">
          <span>QQ</span>
          <span>微信</span>
          <span>github</span>
        </div>
      </div>
    </div>
  )
}

export default memo(LoginLayout)