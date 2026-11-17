import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>

        {/* About us */}
        <div>
          <h4 className='font-bold'>About Us</h4>
          <p className='mt-5 text-justify'>
            We belive books are more than just pages - they are windows into new worlds, teachers of wisdom, and companion for life.Our journey began with a passion for storytelling and a mission to make reading accessible, enjoyable and inspiring for everyone
          </p>
        </div>

        {/* News letter */}
        <div className='flex flex-col md:mt-0 mt-5'>

          <h4 className='font-bold'>NEWS LETTER</h4>
          <p className='my-5'>Stay updated with our latest trends</p>

          <div className='flex'>
            <input type="text" placeholder='E Mail' className='border bg-white text-black p-2'/>
            <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
          </div>

        </div>

        {/* Follow us */}
        <div className='flex flex-col md:mt-0 mt-5'>
          
          <h4 className='font-bold'>Follow us</h4>
          <p className='my-5'>Let us be social.</p>

          <div className='flex gap-4'>
            <FaFacebook/>
            <FaInstagram />
            <FaXTwitter/>
            <FaEnvelope />
          </div>

        </div>

      </div>

    </>
  )
}

export default Footer
