import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSetMenus } from '@/hooks'

interface Iprops {
  route: {routes: []}
}

const Person: React.FC<Iprops> = props => {
  const { route } = props
  // 设置菜单
  useSetMenus(route.routes || [])

  return (
    <div className="person">
      Person
    </div>
  )
}

export default Person