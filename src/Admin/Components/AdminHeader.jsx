import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* Header top */}

        {/* Logo */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0f_yoYOaW9-i7OabFWsnIOKOubu4HcfD1MisABWjQ0oCEmVBND_7JP4&s=10" alt="logo" />
          <h1 className='text-2xl ms-3 font-bold '>Bookstore</h1>
        </div>

        {/* Logout */}
        <button className='flex items-center bg-black text-white px-3 py-2 rounded-xl hover:bg-white hover:text-black border font-bold'>Logout
          <FaPowerOff className='ms-4' />
        </button>
      </div>

      {/* Header marquee */}
      <div className='bg-black text-white p-3 tracking-wider'>
        <marquee>Welcome Admin, Your all set to manage and monitor the system. Let's gets into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
