import React from 'react'
import imag from '../assets/image.png';

function Home() {
  return (
    <div className=' w-full   '>
      <div className='w-full relative'>
        <img src={imag} alt="" className='  h-50 md:h-75 lg:h-90 w-screen object-cover ' />
        <a href='#menu' className='absolute right-5 bottom-5 px-2 py-1 text-sm md:font-semibold text-white bg-amber-950 md:py-2 md:px-5 rounded-xl
         hover:scale-120 transition duration-200'>View Menu</a>
      </div>
    </div>
  )
}

export default Home
