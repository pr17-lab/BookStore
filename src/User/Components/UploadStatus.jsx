import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      
      {/* Duplicate book status */}
      <div className='bg-gray-100 rounded p-5 mt-4'>
        <div className='md:grid grid-cols-[3fr_1fr]'>

            {/* 1st section */}
            <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h1 className='text-xl'>Author</h1>
                <h1 className='text-lg text-blue-600'>$ Price</h1>
                <p className='font-bold mt-10'>Abstract :</p>
                <div className='flex mt-10'>
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJVOJQ6driIrL-u_SvrZbms_FKT7Gn65IqdRkMZ1NGme7lHdLdp394bY&s=10" alt="pending" />
                    <img width={'120px'} height={'120px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-2-1024x788.png" alt="sold" />
                    <img width={'120px'} height={'120px'} src="https://similarpng.com/_next/image/?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2021%2F01%2FGreen-approved-stamp-with-grunge-on-transparent-background-PNG.png&w=3840&q=75" alt="approved" />
                </div>
            </div>

            {/* 2nd section */}
            <div className='px-10 mt-5 md:mt-0'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s" alt="no image" />
                <div className='flex justify-center'>
                    <button className='bg-red-600 text-white mt-5 font-bold rounded py-2 px-3'>DELETE</button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default UploadStatus
