import * as actionTypes from './constants'

export const setMenu = (data: any) => ({
  type: actionTypes. SET_MENU,
  data
})

export const getMenu = () => {
  return (dispacth: any) => {
    setTimeout(() => {
      dispacth(setMenu('菜单名称'))
    }, 2000)
  }
}
