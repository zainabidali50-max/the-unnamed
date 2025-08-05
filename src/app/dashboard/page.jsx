// app/dashboard/page.tsx or wherever your layout is
import Navbar from '@/commonComponents/Navbar'
import Activity from '@/components/dashboard/Activity'
import Marketplace from '@/components/dashboard/Marketplace'
import News from '@/components/dashboard/News'
import Sidebar from '@/components/dashboard/Sidebar'
import Welcom from '@/components/dashboard/Welcom'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - Fixed */}
        <div className="fixed top-0 left-0 h-screen w-[250px] z-50">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-[250px] h-screen overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <Welcom />
            <Activity />
            <Marketplace/>
            <News/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
