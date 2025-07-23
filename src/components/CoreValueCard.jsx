import React from 'react'

function CoreValueCard({item}) {
  return (
    <div className='flex flex-col border p-3 mt-5 mb-5 rounded-2xl  '>
      <div className='flex gap-5 items-center justify-center'>
        <h1 className='text-2xl'>{item.icon}</h1>
              <div>
                  <span className='text[16px] font-semibold'>{item.title}</span>
                  <p className=''>{item.description}</p>
              </div>
      </div>
    </div>
  )
}

export default CoreValueCard
