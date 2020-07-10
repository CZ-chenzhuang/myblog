import { combineReducers } from 'redux'
import { menuReducer } from '../pages/Menu/store'
import { loginReducer } from '../pages/login/sotre'

export default combineReducers({
  menu: menuReducer,
  login: loginReducer
})