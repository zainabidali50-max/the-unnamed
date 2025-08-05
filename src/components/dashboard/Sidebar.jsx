'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi"; // Hamburger Icon

import logo2 from '../../../public/images/logo2.svg';
import logo3 from '../../../public/images/logo3.svg';
import logo4 from '../../../public/images/logo4.png';
import logo5 from '../../../public/images/logo5.png';
import logo6 from '../../../public/images/logo6.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar with Hamburger */}
      <div className="lg:hidden flex items-center justify-between bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white px-6 py-4 shadow-md">
        <h1 className="text-lg font-semibold">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <section
        className={`bg-gradient-to-b from-purple-900 via-gray-900 to-black text-white 
        fixed lg:static top-0 left-0 h-screen max-w-[250px] w-full 
        border-r border-gray-800 shadow-xl transform 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        z-50`}
      >
        <div className="flex flex-col pt-24 px-6 h-full space-y-2">

          {/* Dashboard */}
          <Link href="/dashboard">
            <div className="flex items-center gap-x-4 hover:bg-purple-800/40 rounded-md px-3 py-2 cursor-pointer transition-all duration-200">
              <Image src={logo2} alt="Dashboard Icon" className="w-7 h-7" />
              <span className="text-base font-medium">Dashboard</span>
            </div>
          </Link>

          {/* Profile */}
          <Link href="/profile">
            <div className="flex items-center gap-x-4 hover:bg-purple-800/40 rounded-md px-3 py-2 cursor-pointer transition-all duration-200">
              <Image src={logo3} alt="Profile Icon" className="w-7 h-7" />
              <span className="text-base font-medium">Profile</span>
            </div>
          </Link>

          {/* Marketplace */}
          <Link href="/marketplace">
            <div className="flex items-center gap-x-4 hover:bg-purple-800/40 rounded-md px-3 py-2 cursor-pointer transition-all duration-200">
              <Image src={logo4} alt="Marketplace Icon" className="w-7 h-7" />
              <span className="text-base font-medium">Marketplace</span>
            </div>
          </Link>

          {/* Mission */}
          <Link href="/mission">
            <div className="flex items-center gap-x-4 hover:bg-purple-800/40 rounded-md px-3 py-2 cursor-pointer transition-all duration-200">
              <Image src={logo5} alt="Mission Icon" className="w-7 h-7" />
              <span className="text-base font-medium">Mission</span>
            </div>
          </Link>

          {/* Group */}
          <Link href="/group">
            <div className="flex items-center gap-x-4 hover:bg-purple-800/40 rounded-md px-3 py-2 cursor-pointer transition-all duration-200">
              <Image src={logo2} alt="Group Icon" className="w-7 h-7" />
              <span className="text-base font-medium">Group</span>
            </div>
          </Link>

          {/* Logout */}
          <div className="flex items-center gap-x-4 mt-10">
            <Image src={logo6} alt="Logout Icon" className="w-7 h-7" />
            <button
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
              }}
              className="px-4 py-2 border border-gray-500 rounded-md hover:bg-red-600 hover:border-red-600 transition-all duration-200"
            >
              Log Out
            </button>
          </div>
        </div>
      </section>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
