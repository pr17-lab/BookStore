import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>

        {/* 1st section - 1 grid */}
        <div className='col-span-1'>
          <AdminSidebar />
        </div>

        {/* 2nd section 4 grid */}
        <div className='col-span-4 p-10'>
          <h1 className='text-center font-bold text-3xl mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* 1st section */}
            <div>
              <h2 className='text-2xl font-medium'>Welcome, Admin 👋</h2>
              <p className='text-justify my-5 tracking-wider'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>

              <h4 className='my-5 font-medium text-lg'>🔧 What You Can Manage in This Section:</h4>
              <ul className='tracking-wider'>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>

              <p className='text-justify my-10 tracking-wider'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
            </div>

            {/* section 2 */}
            <div className='flex flex-col justify-center items-center m-5 bg-blue-100 p-10'>
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' className='hidden' />
                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} className='z-51' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5J15VxdpHltuPtJqMGD5EBmW0qj_coFPHR3EqZqcEyTV1buF6NqtxBY&s=10" alt="user" />
                <button type="button" style={{ marginLeft: '60px', marginTop: '-25px' }} className='bg-black text-white px-2 py-2 rounded z-52 '><FaPen /></button>
              </label>
              {/* Username */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='Username' className='w-full bg-gray-100 rounded p-2' />
              </div>

              {/* Password */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='New password' className='w-full bg-gray-100 rounded p-2' />
              </div>

              {/* New password */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='Confirm passowrd' className='w-full bg-gray-100 rounded p-2' />
              </div>

              {/* Reset and update */}
              <div className='flex justify-end mt-5 px-5 w-full'>
                <button type="button" className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
                <button type="button" className='bg-green-600 text-white px-5 py-2 font-bold rounded ms-3'>UPDATE</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
