import React from 'react'

const SocialLinksLi = (props) => {
    return (
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a className='flex justify-between items-center w-full text-white' href={props.href} target='_blank' rel="noreferrer">
                <span>{props.name}</span>
                {props.icon}
            </a>
        </li>
    )
}

export default SocialLinksLi