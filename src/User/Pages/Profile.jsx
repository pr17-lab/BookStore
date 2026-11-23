import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'

function Profile() {
  const [currentTab,setCurrentTab] = useState(0)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>

      <div style={{ height: "230px", width: "230px", borderRadius: "50%", marginLeft: "75px", marginTop: "-130px" }} className='bg-white p-2 overflow-hidden'>
        <img className='mx-auto' style={{ height: "200px", width: "200px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5J15VxdpHltuPtJqMGD5EBmW0qj_coFPHR3EqZqcEyTV1buF6NqtxBY&s=10" alt="user" />
      </div>

      <div className='flex justify-between px-25 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
          <FaCircleCheck className='text-blue-400 ms-3' />
        </div>
        <Edit/>
      </div>
      <p className='text-justify  items-center px-25 my-3'>Bio</p>
      <p className='items-justify px-25 tracking-wider mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur sapiente aperiam illum, suscipit temporibus eveniet tempore similique molestias error veritatis possimus atque molestiae veniam quaerat soluta voluptatum dignissimos quasi.</p>

      <div className='flex justify-center items-center my-8 font-semibold text-lg gap-10'>
        <p onClick={()=>setCurrentTab(1)} className={currentTab==1?'p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4 border-gray-200 rounded cursor-pointer'}>Upload book</p>
        <p onClick={()=>setCurrentTab(2)} className={currentTab==2?'p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4 border-gray-200 rounded cursor-pointer'}>Upload Book Status</p>
        <p onClick={()=>setCurrentTab(3)} className={currentTab==3?'p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4 border-gray-200 rounded cursor-pointer'}>Purchase history</p>
      </div>
      <div className='px-25 mb-10'>
        {currentTab === 1 && <div><UploadBooks/></div>}
        {currentTab === 2 && <div>Upload books status</div>}
        {currentTab === 3 && <div>Purchase History</div>}
      </div>
      <Footer />
    </>
  )
}

export default Profile
