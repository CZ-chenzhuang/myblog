import React from 'react'
import Blog from '@/pages/Blog'
import Tag from '@/pages/Blog/Tag'
import Article from '@/pages/Blog/Article'
import {
  ContainerOutlined,
  PaperClipOutlined,
  FileAddOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';

export default {
  path: '/blog',
  component: Blog,
  routes: [
    {
      path: '/blog/tag',
      name: '标签列表',
      icon: <UnorderedListOutlined />,
      component: Tag
    },
    {
      path: '/blog/article',
      icon: <ContainerOutlined />,
      name: '文章管理',
      component: Article
    }
  ]
}