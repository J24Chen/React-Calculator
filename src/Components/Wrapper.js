import React from 'react'

//A simple outline of the calculator wrapped, used for CSS purposes
const Wrapper = ({children}) => {
  return (
    <div className = "wrapper">{children}</div>
  )
}

export default Wrapper