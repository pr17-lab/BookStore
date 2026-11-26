import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'


function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
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
          <h1 className='text-3xl font-bold text-center my-10'>All Resoucres</h1>
          <div className='flex justify-center items-center my-8 font-semibold text-lg gap-10'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-gray-200 rounded cursor-pointer'}>Upload book</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-gray-200 rounded cursor-pointer'}>Upload Book Status</p>
          </div>

          {/* tab comments */}
          {currentTab === 1 &&
            <div className='md:grid grid-cols-4 my-10 w-full '>

              {/* Duplicate accoridng to books */}
              <div className='shadow rounded p-3 m-4 md:my-0'>

                <img width={'100%'} height={'300px'}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s"
                  alt="book" />

                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                  <h3 className='text-lg font-bold'>Title</h3>
                  <p className='font-bold text-red-500'>$123</p>
                  <button className='bg-green-600 p-2 rounded w-full text-white'>Approve</button>
                </div>

              </div>

            </div>
          }
          {currentTab === 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* Dupliacte */}
              <div className='rounded bg-gray-200 p-2 m-2'>
                <p className='text-red-500 font-bold'>ID :</p>
                <div className='flex items-center mt-3'>
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5J15VxdpHltuPtJqMGD5EBmW0qj_coFPHR3EqZqcEyTV1buF6NqtxBY&s=10" alt="profilepic" />
                  <div className='ms-5 flex flex-col w-full'>
                    <h4 className='text-blue-400 font-bold text-md'>Username</h4>
                    <p className='text-xs'>username@gmail.com</p>

                  </div>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource