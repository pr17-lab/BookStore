import React from 'react'

function PurchaseHistory() {
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
                    <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purcahse" />
                </div>
            </div>

            {/* 2nd section */}
            <div className='px-10 mt-5 md:mt-0'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s" alt="no image" />
            </div>

        </div>
      </div>
    </div>
  )
}

export default PurchaseHistory
