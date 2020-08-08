import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '@/components/Main/store'
export const useSetMenus = (menus: []) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.topMenuChange(menus))
  }, [dispatch, menus])
}