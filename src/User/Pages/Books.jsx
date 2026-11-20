import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div>
          <input type="text" className='border border-gray-300 w-100 p-2' placeholder='Searchby book title' />
          <button className='bg-blue-800 text-white p-2 ms-2 rounded'>Search</button>
        </div>
      </div>

      {/* Grid: Filterand books card */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>

        {/* Filter */}
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={() => setToggle(!toggle)} className='text-2xl md:hidden'><FaBars /></button>
          </div>

          {/* Filter category */}
          <div className={toggle ? 'block' : 'hidden md:block'}>
            <div className='mt-3'>
              <input name='filtering' type="radio" id='no-filter' />    {/* name given to connect radio */}
              <label className='ms-2' htmlFor="no-filter">All</label>
            </div>

            {/* Filter category */}
            <div className='mt-3'>
              <input name='filtering' type="radio" id='filter' />
              <label className='ms-2' htmlFor="filter">Category</label>
            </div>

          </div>
        </div>

        {/* Book card */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>

            {/* Duplicate according to books */}
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s" alt="bookcard" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 fony-bold text-xl' >Author</h2>
                <h3 className='text-lg mt-2'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded mt-2 font-bold'>View Book</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books
