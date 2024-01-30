import React from 'react'

const NavButton = ({theText, theClass}) => {
  return (
    <button className={theClass}>{theText}</button>
  )
}

export default NavButton
