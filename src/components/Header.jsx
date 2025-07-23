import {useState} from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../Constant/Const.jsx';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";



function Header() {
    const [toggle , setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle);
    }
  return (
    <div className='flex  shrink-0  justify-between px-10 py-5 border-b sticky z-50 top-0 backdrop-blur-lg ' >
        <div>
            <img src={logo} alt="Brew Bean Logo" className="h-12 w-12 rounded-full shadow-amber-950 shadow-2xl"  />
        </div>
          <div className=' hidden md:flex gap-5 items-center'>
            {navItems.map((items,index)=>(
                <div key={index}>
                    <a href={items.link} className='font-semibold text-[16px]   '>{items.name}</a>
                </div>
            ))}
        </div>
          <div className='flex items-center'>
            <h2 className='font-semibold '>BREW & BEAN</h2>
        </div>
        <div className=' md:hidden'>
            {toggle ? <RxCross2 onClick={handleToggle} className='text-3xl md:hidden'/> : <IoIosMenu onClick={handleToggle} className='text-3xl md:hidden'/>}
            {
                  toggle && <div className=' absolute top-24 right-5 flex flex-col px-10 items-center bg-red-950 shadow-lg rounded-lg p-5 md:hidden'>
                    {navItems.map((items,index)=>(
                        <div key={index} className='py-2 '>
                            <a href={items.link} className='font-semibold text-[#c29e84] text-[16px] '>{items.name}</a>
                        </div>
                    ))}
                </div>
            }

        </div>
          
      
    </div>
  )
}

export default Header
