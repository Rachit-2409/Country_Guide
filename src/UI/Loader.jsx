import React from 'react'
import Loaderi from '../../src/assets/Loader.gif'
const Loader = () => {
  return (
    <div className='w-full h-full bg-black flex justify-center items-center fixed top-0 left-0'>
      <img src={Loaderi} alt="" />
    </div>
  )
}

export default Loader
