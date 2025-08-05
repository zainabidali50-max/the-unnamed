import Navbar from '@/commonComponents/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import Market from '@/components/MarketPlace/Market'
import React from 'react'

const page = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='flex flex-row'>

                    <Sidebar />
                    <Market />
                </div>
            </div>
        </>
    )
}

export default page