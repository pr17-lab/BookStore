import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img className='w-150 h-96' src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" alt="" />
      <p className='font-medium mt-5'>OH NO!</p>
      <h1 className='text-2xl font-medium '>Looks like your lost</h1>
      <p className='tracking-wider'>The page your looking for is not available</p>
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded' >Home</Link>
    </div>
  )
}

export default PageNotFound
