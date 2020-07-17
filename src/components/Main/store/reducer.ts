import * as actionTypes from './constants'

const defaultState = {
  menus: []
}

export default (state = defaultState, action: ActionParams) => {
  console.log(action, 'action')
  switch (action.type) {
    case actionTypes.topMenuChange:
      return {
        ...state,
        menus: action.data
      }
    default: 
      return state
  }
}