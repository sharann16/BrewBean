import React from 'react'


function MenuCard({item,name,image}) {
  const imgpath=`/${name}/${image}`
  return (
    <div className='  relative bg-amber-950 p-2 rounded flex flex-col justify-between items-center text-white h-[300px] w-fit md:h-[350px] md:w-[270px]'>
      <div className='mb-3'>
        <img  src={imgpath} alt="" className='object-cover w-[200px] h-[150px] md:w-[270px] md:h-[200px] ' />
      </div>
      <div className='absolute top-40 left-3 md:top-60 md:left-3'>
              <h3 className='text-sm mt-2  #c29e84 font-semibold'>{item.name}</h3>
        <p className='text-sm text-gray-300 pr-2'>{item.description}</p>
        <p className='text-sm font-bold mt-2'>{item.price}</p>
      </div>
    </div>
  )
}

export default MenuCard
