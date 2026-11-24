import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminSettings() {
  return (
   <>
     <AdminHeader/>
        <div className='md:grid grid-cols-5'>
          
          {/* 1st section - 1 grid */}
          <div className='col-span-1'>
            <AdminSidebar/>
          </div>
          
            {/* 2nd section 4 grid */}
            <div className='col-span-4'>
              Admin settings
            </div>
  
          
        </div>
        <Footer/>
   </>
  )
}

export default AdminSettings
