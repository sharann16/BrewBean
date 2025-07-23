import React from 'react'
import MenuCard from './MenuCard'
import { HotBeverages, ColdBrews, Pastries } from '../Constant/Const'


function Menus() {
  return (
    <div id="menu" className='scroll-mt-24 mt-10 flex flex-col w-full'>
      <h2 className='text-xl md:text-2xl flex justify-center font-bold mt-5 mb-1'>Menus</h2>

      <h2 className=' text-xl font-semibold md:text-2xl p-2 mt-5 mb-5'>HotBeverages</h2>
      <div className=' flex gap-3  p-2 mb-10 max-w-7xl overflow-x-auto scroll-smooth scrollbar-hide'> 
        {HotBeverages.map((item,index)=>(
          <div key={index} className='shrink-0 hover:scale-110 my-5 transition-all duration-150 ml-5'  >
            <MenuCard item={item} name="Hot Beverages" image={item.image}/>

          </div>
        ))}
      </div>

      <h2 className=' text-xl font-semibold md:text-2xl p-2 mt-5 mb-5'>ColdBrews</h2>
      <div className=' flex gap-3 p-2 mb-10 max-w-7xl overflow-x-auto scroll-smooth scrollbar-hide '>
        {ColdBrews.map((item, index) => (
          <div key={index} className='shrink-0  hover:scale-110 my-5 transition-all duration-150 ml-5' >
            <MenuCard item={item} name="Cold Brews" image={item.image} />

          </div>
        ))}
      </div>

      <h2 className=' text-xl font-semibold md:text-2xl p-2 mt-5 mb-5'>Pastries</h2>
      <div className=' flex gap-3 p-2 mb-10  max-w-7xl overflow-x-auto scroll-smooth scrollbar-hide '>
        {Pastries.map((item, index) => (
          <div key={index} className='shrink-0  hover:scale-110 my-5 transition-all duration-150 ml-5' >
            <MenuCard item={item} name="Pastries" image={item.image} />

          </div>
        ))}
      </div>
    </div>
  )
}

export default Menus
