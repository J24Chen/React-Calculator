import React from 'react'

//Outline of the calculator in a box, used for CSS purposes
const ButtonBox = ({children}) => {
  return (
    <div className='buttonBox'>{children}</div>
  )
}

export default ButtonBox