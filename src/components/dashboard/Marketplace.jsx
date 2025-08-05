'use client';
import React from 'react'
import Image from 'next/image'
import logo20 from '../../../public/images/logo20.png'
import logo21 from '../../../public/images/logo21.png'
import { items } from '@/constant/dashboard/Marketplace'


const MarketplaceAndBadge = () => {


  

  const renderStars = (item) => {
    if (item.id === 1 || item.id === 3) {
      return (
        <span className="flex gap-[1px]">
          {'★'.repeat(4).split('').map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          <span className="text-gray-500">★</span>
        </span>
      )
    }
    return <span className="text-yellow-400">{'★'.repeat(item.stars)}</span>
  }

  return (
    <section className="flex flex-col lg:flex-row gap-6 bg-black text-white px-6 py-10">
      {/* Left: Marketplace */}
      <div className="bg-[#1e1e1e] rounded-xl p-6 w-full lg:w-2/3">
        <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-gradient-to-r from-black via-[#2b2b2b] to-gray-800 p-4 rounded-lg gap-4">
              
              {/* Image */}
              <Image src={item.image} alt={item.title} className="w-12 h-12 object-contain" />

              {/* Title */}
              <span className="text-base font-semibold w-36">{item.title}</span>

              {/* Price */}
              <span className="text-blue-400 text-sm w-20 text-center">{item.price}</span>

              {/* Coin */}
              <span className="flex items-center gap-1 text-blue-400 text-sm w-20 justify-center">
                <Image src={logo20} alt="coin" className="w-4 h-4" />
                {item.coins}
              </span>

              {/* Stars */}
              <div className="w-28 text-center">
                {renderStars(item)}
              </div>

              {/* Button */}
              <button className={`text-sm font-semibold px-4 py-2 rounded-md transition ${
                item.button === 'Buy Now' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}>
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Badge Achievement */}
      <div className="bg-[#1e1e1e] rounded-xl p-6 w-full lg:w-1/3 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">Achievement Unlocked /<br /> New Recruit</h2>
          <p className="text-sm text-gray-300 mt-2">
            You’ve Earned Your First Badge{' '}
            <span className="text-blue-400 font-semibold hover:underline cursor-pointer">Claim Now!</span>
          </p>
        </div>

        {/* Gradient Badge Box */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg p-4 mt-6 text-black font-bold text-sm text-center flex flex-row">
            <Image src={logo21} alt='logo21'/>
            <h1 className='pt-10'>
          Badge Progress /<br /> Welcome Aboard!</h1>
        </div>

        {/* Carousel Dots and Explore Link */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          </div>
          <span className="text-blue-400 text-sm hover:underline cursor-pointer">Explore More</span>
        </div>
      </div>
    </section>
  )
}

export default MarketplaceAndBadge
