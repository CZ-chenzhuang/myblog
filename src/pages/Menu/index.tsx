import React from 'react';
import { useDispatch } from 'react-redux'
import { getMenu } from './store/actionCreator'
function Menu() {
  const dispatch = useDispatch()
  const initMenu = () => {
    dispatch(getMenu())
  }
  initMenu()
  return (
    <div>
      Menu
    </div>
  );
}

export default Menu;
