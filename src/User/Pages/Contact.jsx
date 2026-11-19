import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis vel, fugiat nesciunt hic reiciendis qui? Itaque, ratione voluptatum? Minus nam iure id incidunt necessitatibus totam nihil eius fugiat magni.
          Omnis ipsum assumenda tenetur itaque praesentium, fugit officia. Hic totam, nam ratione asperiores odio aut itaque recusandae neque adipisci quidem error veniam voluptate impedit? Soluta, alias quisquam. Vitae, incidunt qui.
          Aut illum alias ullam amet saepe molestiae obcaecati laudantium facilis placeat mollitia quas eligendi culpa, iure corporis veritatis laborum, error quo quod magnam explicabo. Modi nesciunt recusandae voluptatum autem itaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat aspernatur magnam maiores eum sequi iusto eos voluptatum laudantium rerum, ipsam autem aliquid eveniet minus, a eius illo. Tenetur, eum!
          Veritatis mollitia voluptatem fugit doloremque illo debitis similique? Quasi enim quisquam iste excepturi animi, repellat impedit sit dolores sapiente corrupti ad amet autem, quas iusto velit rerum perspiciatis dolore facere.
          Officiis quod aut totam beatae error esse blanditiis fugiat, sunt, incidunt, sapiente dolore laudantium pariatur ipsa nulla. Sapiente, consequatur laudantium unde, exercitationem eligendi autem architecto placeat, est asperiores provident pariatur.</p>

        {/* Grid - address, number, email */}
        <div className='md:grid grid-cols-3  items-center mt-5 p-5 md:px-40 md:mt-0'>

          {/* Location */}
          <div className='flex items-center'>
            <div className='flex justify-center items-center bg-gray-300' style={{ height: '50px', width: '50px', borderRadius: '50%' }}>
              <FaLocationPin />
            </div>
            <p className='ms-5 tracking-wider'>123 Main Street, Apt 4B Anytown CA 91234</p>
          </div>
          {/* Number */}
          <div className='flex items-center'>
            <div className='flex justify-center items-center bg-gray-300' style={{ height: '50px', width: '50px', borderRadius: '50%' }}>
              <FaPhone />
            </div>
            <p className='ms-5 tracking-wider'>+90625456697</p>
          </div>

          {/* email */}
          <div className='flex items-center'>
            <div className='flex justify-center items-center bg-gray-300' style={{ height: '50px', width: '50px', borderRadius: '50%' }}>
              <FaEnvelope />
            </div>
            <p className='ms-5 tracking-wider'>contact@bookstore.com</p>
          </div>
        </div>

        {/* Message and map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 md:px-40'>
          {/* Message */}
          <div className='bg-gray-200 text-center p-5'>
            <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>

            <form >

              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
              </div>

              <div className='my-5'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2' />
              </div>

              <div className='my-5'>
                <textarea type="text" placeholder='Message' className='bg-white w-full p-2' />
              </div>

              <div className='my-5'>
                <button className='w-full bg-black text-white p-2 rounded flex justify-center items-center' >Submit <FaPaperPlane className='ms-2' /></button>
              </div>

            </form>

          </div>
          
          {/* Map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9751535676874!2d76.34006767450884!3d10.018908872710194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065865235!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>

        </div>


      </div>
      <Footer />
    </>
  )
}

export default Contact
