import React, { useEffect } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { useSetMenus } from '@/hooks'
import { getBlogList } from '@/http/blog'
interface Iprops extends RouteConfigComponentProps {
  route: {routes:[]}
}

const Blog: React.FC<Iprops> = props => {
  const { route } = props
  // 设置菜单sasa
  useSetMenus(route.routes || [])
  useEffect(() => {
    getBlogList()
  }, [])
  return (
    <div className="blog">
      {
        renderRoutes(route.routes)
      }
    </div>
  )
}

export default Blog
