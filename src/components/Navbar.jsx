import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavbarLi from './NavbarLi'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className="text-5xl font-signature ml-2">Jack</h1>
        </div>

        <ul className='hidden md:flex'>
          <NavbarLi text={'Home'} />
          <NavbarLi text={'About'} />
          <NavbarLi text={'Portfolio'} />
          <NavbarLi text={'Experience'} />
          <NavbarLi text={'Contact'} />
        </ul>

        <div onClick={() => setNav(! nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> :  <FaBars size={30} />}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            <NavbarLi className="py-6 text-4xl" text={'Home'} />
            <NavbarLi className="py-6 text-4xl" text={'About'} />
            <NavbarLi className="py-6 text-4xl" text={'Portfolio'} />
            <NavbarLi className="py-6 text-4xl" text={'Experience'} />
            <NavbarLi className="py-6 text-4xl" text={'Contact'} />
          </ul>
        )}


    </div>
  )
}

export default Navbar