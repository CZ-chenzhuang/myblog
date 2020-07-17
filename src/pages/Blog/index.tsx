import React, { useEffect } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { actions } from '@/components/Main/store'
import { useDispatch } from 'react-redux'
interface Iprops extends RouteConfigComponentProps {
  route
}


const Blog: React.FC<Iprops> = props => {
  const { route } = props
  const dispath = useDispatch()

  useEffect(() => {
    dispath(actions.topMenuChange(route.routes))
  }, [dispath, route])

  return (
    <div className="blog">
      {
        renderRoutes(route.routes)
      }
    </div>
  )
}

export default Blog