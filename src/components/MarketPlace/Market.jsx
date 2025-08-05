"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ✅ App Router
import { FaStar, FaHeart } from "react-icons/fa";
import Image from "next/image";

import logo25 from '../../../public/images/logo25.png';
import logo26 from '../../../public/images/logo26.png';
import logo27 from '../../../public/images/logo27.png';
import logo28 from '../../../public/images/logo28.png';

const items = [
  { name: "Armored Knight", price: "$12.08", rating: 5, image: logo25 },
  { name: "Chibi Warrior", price: "$16.00", rating: 5, image: logo26 },
  { name: "Black Armor", price: "$14.09", rating: 5, image: logo27 },
  { name: "Viking Toy", price: "$12.08", rating: 5, image: logo28 },
  { name: "Medieval Knight", price: "$12.08", rating: 5, image: logo25 },
  { name: "Golden Armored", price: "$20.00", rating: 5, image: logo26 },
  { name: "Armored Knight", price: "$20.00", rating: 5, image: logo27 },
  { name: "Blue Armored Warrior", price: "$25.04", rating: 5, image: logo28 },
];

const Marketplace = () => {
  const router = useRouter(); // ✅ Works in App Router

  const handleCardClick = (item, idx) => {
    const query = new URLSearchParams({
      name: item.name,
      price: item.price,
      rating: item.rating.toString(),
      image: item.image.src,
    }).toString();

    router.push(`/marketCardDetails/?${query}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white px-6 md:px-12 py-10">
      {/* Title & Filters */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8 gap-4 w-full">
        <h1 className="text-4xl font-bold tracking-wide">Marketplace</h1>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search item"
            className="bg-[#1a1a1a] text-sm text-white px-4 py-2 rounded-md border border-gray-700 w-[200px] focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select className="bg-[#1a1a1a] text-sm text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Sort by</option>
          </select>
          <select className="bg-[#1a1a1a] text-sm text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Filter by</option>
          </select>
        </div>
      </div>

      {/* Grid of Items Full Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(item, idx)}
            className="relative cursor-pointer bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 w-full"
          >
            {/* Heart Icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl transition">
              <FaHeart />
            </button>

            {/* Image */}
            <div className="flex justify-center items-center h-48 mb-5">
              <Image
                src={item.image}
                alt={item.name}
                className="object-contain drop-shadow-lg"
                width={150}
                height={150}
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>

            {/* Price + Stars */}
            <div className="flex items-center justify-between text-lg mb-2">
              <span className="text-blue-400 font-bold">{item.price}</span>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
