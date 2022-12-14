import React from 'react'
import arrayDestruct from "../assets/arrayDestruct.jpg";
import installNode from "../assets/installNode.jpg";
import navbar from "../assets/navbar.jpg";
import reactParallax from "../assets/reactParallax.jpg";
import reactSmooth from "../assets/reactSmooth.jpg";
import reactWeather from "../assets/reactWeather.jpg";
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <PortfolioCard
                img={arrayDestruct}
                demo='#'
                code='#' />
          <PortfolioCard
              img={reactParallax}
              demo='#'
              code='#' />
          <PortfolioCard
              img={navbar}
              demo='#'
              code='#' />
          <PortfolioCard
              img={reactSmooth}
              demo='#'
              code='#' />
          <PortfolioCard
            img={installNode}
            demo='#'
            code='#' />
          <PortfolioCard
            img={reactWeather}
            demo='#'
            code='#' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio