import { combineReducers } from 'redux'
import { menuReducer } from '../pages/Menu/store'

export default combineReducers({
  menu: menuReducer
})