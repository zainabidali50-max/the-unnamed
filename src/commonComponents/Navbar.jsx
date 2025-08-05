import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.png'
import { CiBellOn, CiSettings } from "react-icons/ci";
import logo1 from '../../public/images/logo1.png'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gradient-to-r from-purple-800 via-purple-900 to-black text-white w-full shadow-md'>
        <div className='flex flex-row justify-between items-center p-6'>
          
          {/* Left Logo */}
          <div>
            <Image src={logo} alt='logo' className='w-40 h-auto' /> 
          </div>
          
          {/* Right Section */}
          <div className='flex flex-row items-center gap-x-5'>
            
            {/* Search Bar */}
            <input 
              placeholder='Search' 
              type='text' 
              className='px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 transition'
            />

            {/* Icons & Profile */}
            <div className='flex flex-row items-center gap-x-6'>
              <CiBellOn className="text-3xl hover:text-yellow-400 transition" /> 
              <CiSettings className="text-3xl hover:text-yellow-400 transition" /> 
              <Image 
                src={logo1} 
                alt='logo1' 
                className='w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg hover:scale-105 transition'
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
