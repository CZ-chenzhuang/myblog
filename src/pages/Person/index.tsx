import React from 'react'

interface Iprops {

}

const Person: React.FC<Iprops> = Iprops => {
  return (
    <div className="person">
      Person
    </div>
  )
}

export default Person