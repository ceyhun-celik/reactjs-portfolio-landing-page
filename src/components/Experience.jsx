import React from 'react'
import { FaLaravel, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa'
import { RiVuejsFill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'
import ExperienceCard from './ExperienceCard'

const Experience = () => {    
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    <ExperienceCard icon={<FaLaravel size={100} className='text-red-500' />} name='Laravel' />
                    <ExperienceCard icon={<FaReact size={100} className='text-[#25DBFF]' />} name='React.js' />
                    <ExperienceCard icon={<RiVuejsFill size={100} className='text-[#00B97E]' />} name='Vue.js' />
                    <ExperienceCard icon={<FaNodeJs size={100} className='text-[#52A05B]' />} name='Node.js' />
                    <ExperienceCard icon={<SiTailwindcss size={100} className='text-[#00BBFF]' />} name='Tailwind CSS' />
                    <ExperienceCard icon={<FaDatabase size={100} className='text-[#3E6DD2]' />} name='SQL' />
                </div> 
            </div>
        </div>
    )
}

export default Experience