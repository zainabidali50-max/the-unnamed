import Navbar from '@/commonComponents/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      {/* Full Page Layout */}
      <div className="flex flex-col min-h-screen bg-black text-white">
        
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-row flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <section className="flex-1 flex justify-center py-16 px-6 overflow-y-auto">
            <div className="w-full max-w-6xl bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl shadow-2xl border border-gray-700/50 p-12 space-y-12">

              {/* Step Heading */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-400">Step 2</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
                  The Unnamed Supported Games Application
                </h1>
                <p className="text-gray-400 mt-3 text-base max-w-3xl mx-auto">
                  Below is the application for our supported games (Squad, Star Citizen,
                  Arma Reforger, War Thunder)
                </p>
              </div>

              {/* Step 2 - Supported Games IDs */}
              <div className="space-y-8">
                {[
                  { label: 'Steam64 ID', placeholder: 'Steam64 ID', desc: 'Your steam ID looks like "76561197976265660". If you don’t know how to get this take a look at ', link: 'https://steamid.io/', linkText: 'steamid.io', note: 'This is only needed for Squad applicants.' },
                  { label: 'RSI ID', placeholder: 'Star Citizen ID', desc: 'Your RSI ID looks like "meckle". If you don’t know how to get this, ask a recruitment officer.', note: 'This is only needed for Star Citizen applicants.' },
                  { label: 'Reforger ID', placeholder: 'Reforger ID', desc: 'Your Reforger ID looks like "151639919-5511-478e-bc60-8cf7100d946". If you don’t know how to get this, ask a recruitment officer.', note: 'This is only needed for Arma applicants.' },
                  { label: 'War Thunder IGN', placeholder: 'War Thunder ID', desc: 'Your War Thunder IGN is your account name. If you don’t know how to get this, ask a recruitment officer.', note: 'This is only needed for War Thunder applicants.' },
                  { label: 'Dune Awakening ID', placeholder: 'Dune Awakening ID', desc: '', note: '' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <label className="block text-gray-300 text-base font-semibold">{item.label}</label>
                    <input
                      type="text"
                      placeholder={item.placeholder}
                      className="w-full bg-[#1A1A1A] text-gray-200 px-5 py-4 rounded-lg outline-none border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition font-medium"
                    />
                    {(item.desc || item.link) && (
                      <p className="text-xs text-gray-500">
                        {item.desc} 
                        {item.link && <a href={item.link} target="_blank" className="text-blue-400 hover:underline">{item.linkText}</a>} 
                        {item.note && ` ${item.note}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Step 2 - Community Preferences Section */}
              <div className="space-y-8 border-t border-gray-800 pt-10">

                {/* Grid Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Play Time Per Week */}
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-semibold">
                      Play Time Per Week <span className="text-gray-500 text-xs">(Multi select)</span>
                    </label>
                    <div className="flex items-center bg-[#1A1A1A] rounded-lg border border-gray-700 px-5 py-4 justify-between cursor-pointer">
                      <span className="text-gray-500 text-sm">Refers To Any Game Or Activity</span>
                      <span className="text-blue-400 text-xl font-bold">+</span>
                    </div>
                  </div>

                  {/* Discovered Us Through */}
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-semibold">
                      Discovered Us Through <span className="text-gray-500 text-xs">(Multi select)</span>
                    </label>
                    <div className="flex items-center bg-[#1A1A1A] rounded-lg border border-gray-700 px-5 py-4 justify-between cursor-pointer">
                      <span className="text-gray-500 text-sm">Select An Option</span>
                      <span className="text-blue-400 text-xl font-bold">+</span>
                    </div>
                  </div>
                </div>

                {/* Drawn To Us By */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Drawn To Us By <span className="text-gray-500 text-xs">(Free Response)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="What Makes You Interested In This Community?"
                    className="w-full bg-[#1A1A1A] text-gray-200 px-5 py-4 rounded-lg border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition font-medium"
                  />
                </div>

                {/* Games Of Interest */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Games Of Interest <span className="text-gray-500 text-xs">(Multi select)</span>
                  </label>
                  <div className="flex flex-wrap gap-2 bg-[#1A1A1A] rounded-lg border border-gray-700 p-4">
                    {["RTS", "MMO", "SURVIVAL"].map((game, idx) => (
                      <span key={idx} className="bg-sky-600/30 text-sky-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {game} ✕
                      </span>
                    ))}
                    <span className="ml-auto text-blue-400 text-xl font-bold cursor-pointer">+</span>
                  </div>
                </div>

                {/* Teamplay Oriented Games */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Teamplay Oriented Games <span className="text-gray-500 text-xs">(Free Response)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="List Some Games You Enjoy Which Involve Teamwork And Teamplay, (If Any)"
                    className="w-full bg-[#1A1A1A] text-gray-200 px-5 py-4 rounded-lg border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition font-medium"
                  />
                </div>

                {/* Envision In Unnamed */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Envision In Unnamed <span className="text-gray-500 text-xs">(Multi select)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select Members And/Or Staff Roles"
                    className="w-full bg-[#1A1A1A] text-gray-200 px-5 py-4 rounded-lg border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition font-medium"
                  />
                </div>

                {/* Handles Conflict By */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Handles Conflict By <span className="text-gray-500 text-xs">(Free Response)</span>
                  </label>
                  <textarea
                    placeholder="Write Here, How You Would Handle These Situations!"
                    rows="3"
                    className="w-full bg-[#1A1A1A] text-gray-200 px-5 py-4 rounded-lg border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition font-medium"
                  />
                </div>

                {/* Exclusivity Agreement */}
                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-semibold">
                    Exclusivity Agreement <span className="text-gray-500 text-xs">(Multi select)</span>
                  </label>
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg border border-gray-700 px-5 py-4 justify-between cursor-pointer">
                    <span className="text-gray-500 text-sm">Select The Best Option</span>
                    <span className="text-blue-400 text-xl font-bold">+</span>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-5 pt-8">
                  <button className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition font-bold">
                    Go Back
                  </button>
                  <Link href='submmitApplication' className="px-8 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-black font-bold">
                    Submit Application
                  </Link>
                </div>

              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Page
