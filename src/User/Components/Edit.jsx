import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offcanvas, setOffcanvas] = useState(false)

  return (
    <div>
      {/* Buttons */}
      <button onClick={() => setOffcanvas(true)} className='bg-black text-white font-bold p-2 flex justify-center items-center rounded hover:bg-white hover:text-black border'>
        <FaPen className='me-2' />
        Edit
      </button>

      {/* Offcanvas */}
      {offcanvas && 
        <>
          <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
          <div className='bg-white h-full z-50 w-90 fixed top-0 left-0' >
            {/* head */}
            <div className='flex justify-between items-center text-2xl bg-black text-white p-3'>
              <h1 className='font-bold'>Update user profile</h1>
              <FaX onClick={() => setOffcanvas(false)} className='cursor-pointer' />
            </div>

            {/* Body */}
            <div className='flex flex-col justify-center items-center my-5'>
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' className='hidden' />
                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} className='z-51' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5J15VxdpHltuPtJqMGD5EBmW0qj_coFPHR3EqZqcEyTV1buF6NqtxBY&s=10" alt="user" />
                <button type="button" style={{marginLeft:'60px',marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded z-52 fixed'><FaPen/></button>
              </label>
              {/* Username */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='Username' className='w-full bg-gray-100 rounded p-2'/>
              </div>

              {/* Password */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='New password' className='w-full bg-gray-100 rounded p-2'/>
              </div>

              {/* New password */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='Confirm passowrd' className='w-full bg-gray-100 rounded p-2'/>
              </div>

              {/* Bio */}
              <div className='mb-3 mt-10 w-full px-5'>
                <input type="text" placeholder='Bio' className='w-full bg-gray-100 rounded p-2'/>
              </div>

              {/* Reset and update */}
              <div className='flex justify-end mt-5 px-5 w-full'>
                <button type="button" className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
                <button type="button" className='bg-green-600 text-white px-5 py-2 font-bold rounded ms-3'>UPDATE</button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Edit