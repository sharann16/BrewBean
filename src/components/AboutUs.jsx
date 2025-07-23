import React from 'react'
import { aboutUs } from '../Constant/Const'
import CoreValueCard from './CoreValueCard'

function AboutUs() {
  return (
    <div id="aboutus" className='scroll-mt-30 mt-5 flex flex-col max-w-7xl w-full' style={{ color: '#c29e84' }}>
      <h2 className='text-xl md:text-2xl flex justify-center  font-bold mt-0 mb-1'>About US</h2>
      <div >
        <h2 className='text-sm md:text-[16px] mt-5 mb-5 '>{aboutUs.body}</h2>
      </div>
      <div className='flex flex-col  items-center justify-center md:flex md:flex-row md:justify-around '>
        {aboutUs.coreValues.map((value, index) => (
          <div>
            <CoreValueCard item={value}/>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default AboutUs
