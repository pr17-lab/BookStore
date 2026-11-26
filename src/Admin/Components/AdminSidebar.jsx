import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen py-10'>

      {/* image */}
      <div className='flex justify-center'>
        <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5J15VxdpHltuPtJqMGD5EBmW0qj_coFPHR3EqZqcEyTV1buF6NqtxBY&s=10" alt="" />
      </div>

      {/* name */}
      <h1 className='font-medium tracking-wider text-2xl text-center my-5'>Admin</h1>

      {/* Links */}
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='mt-5'>
          <Link to={'/admin'} className='flex items-center tracking-wider'><FaChartSimple className='me-3' />Dashboard</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/resources'} className='flex items-center tracking-wider'><FaDatabase className='me-3' />Collections</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/settings'} className='flex items-center tracking-wider'><FaGear className='me-3' />Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
