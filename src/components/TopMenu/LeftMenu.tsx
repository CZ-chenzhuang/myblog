import React from 'react'
import { Menu } from 'antd';
interface Iprops {

}

const Header: React.FC<Iprops> = (props) => {
  const menuList: Array<any> = [
    { name: '工作台', key: 1 },
    { name: '产品管理', key: 2 },
    { name: '采购管理', key: 3 },
    { name: '仓库物流管理', key: 4 },
    { name: '运营管理', key: 5 },
    { name: '财务中心', key: 6 }
  ]
  return (
    <div className="header-left">
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        {
          menuList.map(item => (
            <Menu.Item key={item.key}>{item.name}</Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}

export default Header