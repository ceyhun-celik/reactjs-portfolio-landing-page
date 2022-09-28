import React from 'react'

const PortfolioCard = (props) => {
  return (
    <div className='shadow-md shadow-gray-600 rounded-lg'>
    <img src={props.img} alt="" className='rounded-md duration-200 hover:scale-105' />
    <div className='flex items-center justify-center'>
      <a href={props.demo} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
      <a href={props.code} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
    </div>
  </div>
  )
}

export default PortfolioCard