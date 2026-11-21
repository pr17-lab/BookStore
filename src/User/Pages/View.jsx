import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className='border shadow border-gray-200 p-5'>

          {/* Grid */}
          <div className='md:grid grid-cols-4 gap-x-10'>

            {/* Image */}
            <div className='col-span-1'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s" alt="viewBook" />
            </div>

            {/* Book details */}
            <div className='col-span-3'>
              <div className='flex justify-between'>
                <h3 className='font-bold text-2xl'>Title</h3>
                <button onClick={() => setModal(true)} className='text-gray-400'><FaEye /></button>
              </div>

              <h2 className='font-bold text-blue-600'>Author</h2>
              <div className='md:grid grid-cols-3 my-10 gap-10'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Lanaguage :</p>
                <p className='font-bold'>No of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Original Prics :</p>
                <p className='font-bold'>Seller :</p>
              </div>

              <div className='my-4 md:my-10'>
                <h4 className='font-bold text-2xl'>Abstract :</h4>
              </div>

              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-800 text-white p-2 rounded font-bold flex items-center'><FaBackward className="me-2" /> Back</Link>
                <button className='bg-green-800 text-white rounded font-bold p-2 ms-5'>Buy $9</button>
              </div>
            </div>

          </div>
        </div>

        {/* Modal */}
        {modal &&
          <div onClick={() => setModal(false)} className='relative z-10 overflow-y-auto'>
            <div className='bg-gray-500/50 fixed inset-0'>
              <div className='flex justify-center items-center min-h-screen'>
                <div className='bg-white rounded-2xl overflow-hidden w-100 md:w-250'>

                  {/* modal title */}
                  <div className='bg-black text-white p-3'>
                    <h2>Book Images</h2>
                  </div>

                  {/* Relative */}
                  <div className='relative p-5'>
                    <p className='flex items-center text-blue-500 '><FaCamera className='me-3' />Camera clicks  of the books</p>
                    <div className='flex flex-wrap my-5'>
                      <img className='md:w-75 w-25 md:me-2 mb-3 md-mt-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s" alt="viewbook" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default View
