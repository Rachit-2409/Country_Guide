import React from 'react'
import HomeCard from '../Components/HomeCard'
import worldMap from '../assets/3d-icon-traveling-vacation.png'

const Home = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-12 gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 flex justify-center flex-col text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl mb-5 font-bold leading-tight">
          Discover Countries. Explore Cultures. Experience ATLAS.
        </h1>
        <p className="text-lg text-gray-600">
          ATLAS brings you reliable insights, tools, and resources to navigate a fast-changing world. 
          Whether you’re discovering new countries, learning about cultures, or exploring global data, 
          ATLAS is your trusted guide to information that matters.
        </p>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={worldMap} alt="World Map" className="w-full max-w-md h-auto object-contain" />
      </div>
    </div>
    <div className='container flex flex-wrap gap-8 justify-center my-10'>

      <HomeCard/>

    </div>
</>
  )
}

export default Home
