import React from 'react';
import './App.css';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Menu from './pages/Menu'

function App() {
  let dispatch = useDispatch()
  return (
    <div className="App">
      <Button type="primary">测试</Button>
      <Menu></Menu>
    </div>
  );
}

export default App;
