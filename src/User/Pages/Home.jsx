import React from 'react'
import Header from "../Components/Header";
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa';



function Home() {
  return (
    <div>
      <Header />

      {/* Hero section */}
      <div style={{ height: '600px' }}
        className='flex flex-col justify-center-items-center bg-[url(/hero.png)] bg-cover text-white'>

        <div style={{ height: '600px', backgroundColor: "rgba(0,0,0,0.6)" }}
          className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderful gifts</h1>
          <p className='mt-2'>Gift your family and friends a book</p>

          <div className='flex items-center mt-6'>
            <input type="text" placeholder='Search a book' className='bg-white text-black rounded-3xl w-100 p-2' />
            <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:'-40px'}}/>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home
