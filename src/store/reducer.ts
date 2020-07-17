import { combineReducers } from 'redux'
import { menuReducer } from '../pages/Menu/store'
import { loginReducer } from '../pages/login/sotre'
import { mainReducer } from '../components/Main/store'

export default combineReducers({
  menu: menuReducer,
  login: loginReducer,
  main: mainReducer
})