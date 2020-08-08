import * as actionTypes from './constants'
export const changeMenu = (path: string) => ({
  type: actionTypes.topMenuChange,
  data: 1
})

export const topMenuChange = (routes: []) => ({
  type: actionTypes.topMenuChange,
  data: routes
})

export const setPrimary = (color: string) => ({
  type: actionTypes.PRIMARY_CHANGE,
  data: color
})

export const setTheme = () => ({

})
