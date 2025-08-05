import Navbar from '@/commonComponents/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import ApplicationReview from '@/components/Profile/ApplicationReview'
import React from 'react'

const page = () => {
  return (
    <>
    
    <Navbar/>
    <div className="flex flex-row h-[calc(100vh-64px)] overflow-hidden">
    <Sidebar />
    <div  className="flex-1 overflow-y-auto">
    <ApplicationReview/></div>
    </div>

    
    </>
  )
}

export default page