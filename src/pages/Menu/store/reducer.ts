const defaultState = {
  name: 'Menu的reducer'
}

export default (state = defaultState, action: any) => {
  console.log(action)
  return state
}