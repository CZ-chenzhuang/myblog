import React from 'react'
import Blog from '@/pages/Blog'
import Tag from '@/pages/Blog/Tag'
import {
  ContainerOutlined,
  PaperClipOutlined
} from '@ant-design/icons';
export default {
  path: '/blog',
  component: Blog,
  routes: [
    {
      path: '/blog/tag',
      name: '标签管理',
      icon: <PaperClipOutlined />,
      component: Tag
    },
    {
      path: '/blog/article',
      icon: <ContainerOutlined />,
      name: '文章管理',
    }
  ]
}