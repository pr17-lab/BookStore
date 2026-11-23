import React from 'react'

function UploadBooks() {
    return (
        <div className='bg-gray-300 p-10 my-20 mx-50'>
            <h1 className='text-center text-3xl font-medium'>UPLOAD BOOK DETAILS</h1>

            {/* Grid */}
            <div className='md:grid grid-cols-2 mt-10 w-full'>

                {/* first section */}
                <div className='px-5'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Cover Image' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Total pages' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <textarea rows={'5'} type="text" placeholder='Abstarct' className='w-full p-2 bg-white rounded' />
                    </div>
                </div>
                {/* second section */}
                <div className='px-5'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
                    </div>
                    
                    {/* Upload image */}
                    <div className='flex items-center justify-center my-10'>
                        <label htmlFor="bookImages">
                            <input type="file" id='bookImages' hidden />
                            <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} className='object-sover'  src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png" alt='upload' />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadBooks
