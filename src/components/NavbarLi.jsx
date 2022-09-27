import React from 'react'

const NavbarLi = (props) => {
  return (
    <li className={`${props.className} px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200`}>{props.text}</li>
  )
}

export default NavbarLi