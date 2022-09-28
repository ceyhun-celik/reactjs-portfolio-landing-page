import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className='flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
            {props.icon}
            <p className='mt-4'>{props.name}</p>
        </div>
    )
}

export default ExperienceCard