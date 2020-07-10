import * as actionTypes from './constants'

const defaultProps = {

}

export default (state = defaultProps, action: object) => {
  console.log(action, '传到reducer了')
  return state
}