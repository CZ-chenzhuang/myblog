import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { actions } from '../Main/store'
interface Iprops {
  history
}

const Header: React.FC<Iprops> = (props) => {
  console.log(props, actions,'leftMenu--prop')
  const { history } = props
  const handleClickLink = useCallback(({key}) => {
    history.push(key)
  }, [history])

  const menuList: Array<any> = [
    { name: '工作台', key: 1, path: '/work' },
    { name: '博客管理', key: 2, path: '/blog' },
    { name: '个人中心', key: 3, path: '/person' }
  ]
  return (
    <div className="header-left">
      <Menu
        onClick={handleClickLink}
        mode="horizontal" 
        defaultSelectedKeys={['2']}>
        {
          menuList.map(item => (
            <Menu.Item key={item.path}>{item.name}</Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}

export default withRouter(Header)