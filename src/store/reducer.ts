import { combineReducers } from 'redux'
import { loginReducer } from '../pages/login/sotre'
import { mainReducer } from '../components/Main/store'

export default combineReducers({
  login: loginReducer,
  main: mainReducer
})