import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '@/components/Main/store'
interface Iprops {

}

const Work: React.FC<Iprops> = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.topMenuChange([]))
  }, [dispatch])

  return (
    <div className="work">
      Work
    </div>
  )
}

export default Work