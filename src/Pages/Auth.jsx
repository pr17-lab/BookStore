import React from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {

  const [togglePasswordType, setTogglePasswordType] = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/hero.png)] bg-cover text-white'>
      <div className='p-10'>
        <h1 className='font-bold text-3xl text-center'>BOOKSTORE</h1>
        <div className='bg-black text-white flex flex-col justify-center items-center  my-5 p-5'
          style={{ width: '400px' }}>

          <div className='border mb-5 flex justify-center items-center'
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
            <FaUser className='text-3xl' />
          </div>
          
          <h1 className='text-2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form className='my-5 w-full' >

            {/* Username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black p-2 my-5 w-full rounded' />
            }

            {/* Email */}
            <input type="text" placeholder='Email' className='bg-white text-black p-2 mb-5 w-full rounded' />

            {/* Password */}
            <div className='flex items-center'>
              <input type={togglePasswordType ? "text" : "password"} placeholder='Password' className='bg-white text-black p-2 mb-5 w-full rounded' />
              {
                togglePasswordType ?
                  <FaEyeSlash onClick={() => setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{ marginLeft: "-25px", marginTop: "-20px" }} />
                  :
                  <FaEye onClick={() => setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{ marginLeft: "-25px", marginTop: "-20px" }} />
              }
            </div>

            {/* forgot password */}
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>*Never share your password</p>
              {
                !insideRegister &&
                <button className='text-xs underline'>Forgot Password</button>
              }
            </div>

            {/* Login / Register button */}
            <div className='my-5 text-center'>
              {
                insideRegister ?
                  <button className='bg-green-800 w-full p-2 rounded'>Register</button>
                  :
                  <button className='bg-green-800 w-full p-2 rounded'>Login</button>
              }
            </div>

            {/* Google authentication */}
            {
              !insideRegister &&
              <div className='test-center my-5'>
                <p>------------------------------------or----------------------------------</p>
                <div className='flex justify-center items-cente w-full mt-2'>
                  Google Authentication
                </div>
              </div>
            }

            {/* New / already users */}
            <div className='text-center'>
              {
                insideRegister ?
                  <p className='text-blue-500'>Existing User? <Link to={'/login'} className='ms-4 underline'>Login</Link></p>
                  :
                  <p className='text-blue-500'>New User ? <Link to={"/register"} className='ms-4 underine'>Login</Link></p>
              }
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
