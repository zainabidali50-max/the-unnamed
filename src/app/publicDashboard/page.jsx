import Navbar from '@/commonComponents/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import Welcom from '@/components/dashboard/Welcom'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Welcom/>
    </>
  )
}

export default page