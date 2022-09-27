import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from '../assets/heroImage.jpg'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b via-black from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am Full Stack Developer</h2>

                <p className='text-gray-500 py-4 max-w-md'>
                    I have 1 years of experience building softwares. My biggest
                    passion is develop Products that people can use with little/no
                    effort. I am experienced PHP 🐘 and JavaScript and using
                    Laravel, React.js and Tailwind CSS.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        <span>Portfolio</span>
                        <span className='group-hover:rotate-90 group-hover:mb-1 duration-300'>
                            <MdOutlineKeyboardArrowRight className='ml-1' size={20} />
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={heroImage} alt="/" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home