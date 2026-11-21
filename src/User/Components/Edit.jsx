import React from 'react'
import { FaPen } from 'react-icons/fa'

function Edit() {
  return (
    <div>
        {/* Buttons */}
        <button className='bg-black text-white font-bold p-2 flex justify-center items-center rounded hover:bg-white hover:text-black border'>
            <FaPen className='me-2'/>
            Edit
        </button>

        {/* Offcanvas */}
    </div>
  )
}

export default Edit
