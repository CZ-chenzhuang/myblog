import React from 'react'

interface Iprops {

}

const Tag: React.FC<Iprops> = props => {
  console.log(props, 'Tag')
  return (
    <div className="tag">
      Tag
    </div>
  )
}

export default Tag