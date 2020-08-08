import * as actionTypes from './constants'

const defaultState = {
  menus: [],
  primaryColor: localStorage.getItem('primary') || '#000',
  theme: localStorage.getItem('theme') || '#000'
}

export default (state = defaultState, action: ActionParams) => {
  switch (action.type) {
    case actionTypes.topMenuChange:
      return {
        ...state,
        menus: action.data
      }
      case actionTypes.PRIMARY_CHANGE:
        return {
          ...state,
          primaryColor: action.data
        }
    default: 
      return state
  }
}