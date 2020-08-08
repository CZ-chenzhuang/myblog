import React from 'react'
import Person from '@/pages/Person'
import {
  MessageOutlined,
  SoundOutlined
} from '@ant-design/icons';
export default {
  path: '/person',
  component: Person,
  routes: [
    {
      path: 'person/message',
      name: '我的消息',
      icon: <MessageOutlined/>
    },
    {
      path: '/person/notice',
      icon: <SoundOutlined />,
      name: '系统通知',
    }
  ]
}