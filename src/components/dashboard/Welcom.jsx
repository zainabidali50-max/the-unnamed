import Image from 'next/image';
import React from 'react';
import logo7 from '../../../public/images/logo7.png';
import logo8 from '../../../public/images/logo8.png';
import logo9 from '../../../public/images/logo9.png';
import logo10 from '../../../public/images/logo10.png';
import logo17 from '../../../public/images/logo17.png';

const Welcom = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-12 text-white bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]">
      <div className="w-full space-y-10">

        {/* Welcome Back Card - Full Width */}
        <div className="bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111] rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.08)] flex flex-col sm:flex-row items-center justify-between gap-8 w-full">
          
          {/* Left Section */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Welcome Back! <span className="text-yellow-400">Javier</span>
            </h2>

            {/* Golden Bar with XP Info */}
            <div className="flex items-center gap-5 w-full">
              <Image src={logo7} alt="XP Star" width={48} height={48} />

              <div className="flex flex-col w-full">
                <p className="text-base text-gray-300 mb-2">Level 12</p>
                <div className="relative w-[691px] h-4 bg-gray-800/70 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFB547] to-[#F0EA39] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                    style={{ width: '74.5%' }}
                  />
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  <span>8,450 / 10,000 XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* XP Button */}
          <div className="flex flex-col px-14 items-center sm:items-end mt-3.5">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)] transition duration-300">
              EARN MORE XP
            </button>
          </div>
        </div>

        {/* Three Stat Cards Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {/* Currency Coin */}
          <div className="bg-gradient-to-b from-[#111] via-[#161616] to-[#111] rounded-2xl p-7 shadow-[0_0_20px_rgba(0,255,0,0.05)] flex items-center gap-5 w-full hover:scale-[1.02] transition-transform">
            <div className="p-3 rounded-full bg-green-500/10">
              <Image src={logo8} alt="logo8" width={40} height={40} />
            </div>
            <div className="flex flex-col w-full">
              <p className="text-base text-gray-400">Currency Coin</p>
              <div className="flex items-center gap-3 mt-1">
                <Image src={logo17} alt='logo17'/>
                <span className="text-xl font-semibold">1,254</span>
              </div>
            </div>
          </div>

          {/* XP Earned */}
          <div className="bg-gradient-to-b from-[#111] via-[#161616] to-[#111] rounded-2xl p-7 shadow-[0_0_20px_rgba(255,215,0,0.05)] flex items-center gap-5 w-full hover:scale-[1.02] transition-transform">
            <div className="p-3 rounded-full bg-yellow-500/10">
              <Image src={logo9} alt="logo9" width={40} height={40} />
            </div>
            <div className="flex flex-col w-full">
              <p className="text-base text-gray-400">XP Earned</p>
              <p className="text-xl font-semibold mt-1">12,400</p>
            </div>
          </div>
          
          {/* My Groups */}
          <div className="bg-gradient-to-b from-[#111] via-[#161616] to-[#111] rounded-2xl p-7 shadow-[0_0_20px_rgba(255,0,100,0.05)] flex items-center gap-5 w-full hover:scale-[1.02] transition-transform">
            <div className="p-3 rounded-full bg-pink-500/10">
              <Image src={logo10} alt="logo10" width={40} height={40} />
            </div>
            <div className="flex flex-col w-full">
              <p className="text-base text-gray-400">My Groups</p>
              <p className="text-xl font-semibold mt-1">
                4 <span className="text-sm font-normal text-gray-400">Active Groups</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Welcom;
