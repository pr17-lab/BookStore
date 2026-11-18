import React from 'react'
import Header from "../Components/Header";
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';



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
            <FaSearch className='text-gray-500 cursor-pointer' style={{ marginLeft: '-40px' }} />
          </div>

        </div>

      </div>

      {/* New arrivals */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>

        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-4xl my-2'>Explore Our Latest Collections</h1>

        <div className='md:grid grid-cols-4 my-10 w-full '>

          {/* Duplicate accoridng to books */}
          <div className='shadow rounded p-3 m-4 md:my-0'>

            <img width={'100%'} height={'300px'}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNKh6VGq3V0Wo61P9eMEEB5fx6I5lAC1e9jEP2AuDNg&s"
              alt="book" />

            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
              <h3 className='text-lg font-bold'>Title</h3>
              <p className='font-bold text-red-500'>$123</p>
            </div>

          </div>

        </div>

        <div className='my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white rounded'>Explore more..</Link>
        </div>

      </section>

      {/* Authors */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40 my-5'>

        <div className='text-center'>

          <h2 className='font-bold text-xl'>FEATURED AUTHORS</h2>
          <h3 className='text-xl'>Captivates with every word</h3>
          <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>

          <p className='text-justify'>Our Author Features include:</p>
          <p className='text-justify my-4'>
            <span className='font-bold'>✨ Author Profiles : </span> 
            Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
          <p className='text-justify'>
            <span className='font-bold'>📖 Published Works : </span> 
            Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
          <p className='text-justify my-4'>
            <span className='font-bold'>🎤 Interviews & Insights : </span> 
            Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>

        </div>

        <div className='p-5'>
          <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
        </div>

      </section>

      {/* Testimonials */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>

        <h1 className='text-xl font-bold'>Testimonials</h1>
        <h2 className='text-2xl my-2'>See What Others Are Saying</h2>
        
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
          <h3 className='my-5'>Lutur King</h3>
          <p className='text-center tracking-wider'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Home
