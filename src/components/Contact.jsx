import React from 'react'

function Contact() {
  return (
      <div id="contact" className=' border-t-1 mt-5 flex flex-col max-w-7xl w-full' style={{ color: '#c29e84' }} >
          <h2 className='text-xl mt-5 md:text-2xl flex justify-center  font-bold  mb-1'>Get in Touch</h2>
        <div className='flex flex-col md:flex md:flex-row md:gap-10 justify-center '>
            <div className='p-4 px-10 '>
                <div className='mt-5 mb-5'>
                      <h2 className='font-semibold text-xl'>  Café Address : </h2>
                      <p className='w-75 '>Brew & Bean Café
                          No. 27, MG Road
                          Coimbatore, Tamil Nadu - 641001</p>
                </div>
                  <div className='mb-5'>
                      <h2 className='font-semibold text-xl '>  Opening Hours : </h2>
                      <p className='w-75 '>Monday – Friday:   8:00 AM – 8:00 PM
                          Saturday – Sunday: 9:00 AM – 10:00 PM</p>
                  </div>
                  <div>
                      <h2 className='font-semibold text-xl'>Contact : </h2>
                      <p className='w-75 '>📞 +91 98765 43210</p>
                      <p>📸 @brewandbean.in</p>
                  </div>
            </div>

              <div className='mt-10  max-w-full  m-10 sm:justify-center sm:items-center '>
                  <div className='flex flex-col  '>
                    
                    <input type="text" placeholder='Name' className=' border p-2 rounded-2xl mb-5'/>
                    <input type="email" placeholder='e-mail' className=' border p-2 rounded-2xl mb-5'/>
                    <input type="text" placeholder='message' className=' border p-2 h-30 rounded-2xl mb-5'/>
                      <input type="button" value="Send" className='text-orange-950 py-1 font-semibold rounded-3xl' style={{background:"#c29e84 "}}/>
                      
                  </div>
              </div>

        </div>
      
    </div>
  )
}

export default Contact
