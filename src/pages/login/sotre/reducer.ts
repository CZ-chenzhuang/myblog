import * as actionTypes from './constants'

const defaultProps = {
  isLogin: false,
  loading: false
}

export default (state = defaultProps, action: ActionParams) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        isLogin: true,
        loading: false
      }
    case actionTypes.changeLoading:
      return {
        ...state,
        loading: true
      }
    case actionTypes.signOut:
      return {
        ...state,
        isLogin: false
      }
    default:
        return state;
  }
}