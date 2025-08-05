import Navbar from '@/commonComponents/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'
import logo24 from '../../../public/images/logo24.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row bg-black">
        <Sidebar />

        <section className="bg-black text-white min-h-screen w-full flex items-center justify-center py-16">
          <div className="w-full max-w-6xl bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl shadow-2xl border border-gray-700/50 p-12 space-y-12">

            {/* Top Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-[48px] font-extrabold tracking-tight">
                Apply to Join the Community
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Please respond to each question thoughtfully and avoid one-word answers.
                If you have any questions, please ask the recruiter in your ticket.
              </p>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-400">Note:</span> This is NOT a staff application. 
                If you wish to be an admin or staff member of The Unnamed, you must be 
                a member (this application) for a minimum of 3 months first.
              </p>
            </div>

            {/* Profile Section in Row */}
            <div className="flex flex-row items-start justify-center gap-8 w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-10 shadow-xl border border-gray-700/50">
              
              {/* Profile Image */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src={logo24}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border border-gray-600 shadow-lg"
                />
                <button className="text-blue-400 text-sm mt-3 hover:underline transition">
                  Change Image
                </button>
                <span className="text-gray-500 text-xs mt-1">
                  JPG or PNG, Max 10MB
                </span>
              </div>

              {/* ZenWave Info + Input Fields */}
              <div className="flex-1 flex flex-row justify-between items-start gap-8 flex-wrap">
                
                {/* ZenWave Info Card */}
                <div className="space-y-2 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5 rounded-xl shadow-md border border-gray-700/60 min-w-[230px]">
                  <h2 className="text-2xl font-bold">ZenWave</h2>
                  <p className="text-yellow-400 text-sm font-medium">10 XP</p>
                  <a href="#" className="text-blue-400 text-sm break-all hover:underline transition">
                    https://Discord.Gg/Gaminghub
                  </a>
                </div>

                {/* Input Fields */}
                <div className="flex flex-col gap-5 flex-1 min-w-[280px]">
                  <input
                    type="text"
                    placeholder="Discord Username (Ex: UNN.X0.Exho)"
                    className="bg-[#1A1A1A] text-gray-200 px-5 py-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                  <input
                    type="text"
                    placeholder="In-Game Username (Ex: UNN.X0.Exho)"
                    className="bg-[#1A1A1A] text-gray-200 px-5 py-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition">
                    <input
                      type="text"
                      placeholder="MM/DD/YY"
                      className="flex-1 bg-transparent text-gray-200 px-5 py-3 outline-none"
                    />
                    <div className="px-4 text-gray-500 cursor-pointer hover:text-blue-400 transition">
                      📅
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference & Agreements & Games */}
            <div className="space-y-6 pt-6 border-t border-gray-800">
              
              {/* Reference Field */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Reference(s) <span className="text-gray-600 text-xs">(Discord User name / N/A)</span>
                </label>
                <input
                  type="text"
                  disabled
                  value="Recruits Cannot Be Used As References"
                  className="w-full bg-[#1A1A1A] text-gray-500 px-4 py-3 rounded-lg cursor-not-allowed border border-gray-800"
                />
              </div>

              {/* 18+ Agreement */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-5 space-y-3 shadow-md">
                <p className="text-gray-300 text-sm">
                  The Unnamed requires our members to be above the age of 18 years old. If you are found to be dishonest
                  with your selection you will be removed from the community.
                </p>
                <div className="flex gap-6 text-sm mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ageAgreement" className="accent-green-500" /> 
                    <span>I Agree</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ageAgreement" className="accent-red-500" /> 
                    <span>I Do Not Agree</span>
                  </label>
                </div>
              </div>

              {/* Accordion Agreements */}
              <div className="space-y-2">
                {["Rules Agreement","Community Agreement","Confidentiality Agreement"].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-[#1A1A1A] px-4 py-3 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-800 transition"
                  >
                    <span>{item}</span>
                    <span className="text-gray-400 text-xl">+</span>
                  </div>
                ))}
              </div>

              {/* Game Selection */}
              <div className="space-y-3 mt-6">
                <p className="text-sm text-gray-400">
                  Applying to UNN: <span className="text-gray-500">Please select the game(s) you're joining UNN for. Choose 'Community' only if you don't play any listed games.</span>
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {["Squad","Star Citizen","Arma Reforger","War Thunder","Dune Awakening","Community"].map((game,index) => (
                    <label key={index} className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg cursor-pointer border border-gray-700 hover:border-blue-500 transition">
                      <input type="checkbox" className="accent-blue-500"/>
                      <span>{game}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
                  Cancel & Return
                </button>
                <Link href='communityStepTwo' className="px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-black font-semibold">
                  Next Step
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default page
