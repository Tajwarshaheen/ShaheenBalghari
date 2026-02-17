import React from 'react'
import faceimage from '../src/assets/facebook.svg'
import insta from '../src/assets/instagram.svg'
import youtube from '../src/assets/youtube.svg'
import xee from '../src/assets/xee.svg'
import balgharPic from '../src/assets/Balghar-pic.jpg'

function WebsiteFooter() {
  return (
    <>
      <section className='grid grid-cols-1 gap-6 mt-20 mx-4 sm:grid-cols-2 lg:grid-cols-3 sm:mx-10 lg:mx-20'>

        {/* Box 1 */}
        <div className='
          w-full max-w-[330px] h-[120px] bg-purple-700 flex items-center justify-between rounded-[10px] mx-auto
          transform transition duration-700 ease-in-out
          hover:scale-105 hover:shadow-lg
          animate-fadeInUp
        '>
          <img
            src={balgharPic}
            alt="Balghar"
            className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full ml-5 transform transition hover:scale-110'
          />
          <p className='text-lg sm:text-2xl font-bold text-white mr-5 animate-fadeIn'>
            City of Balghar
          </p>
        </div>

        {/* Box 2 */}
        <div className='
          w-full max-w-[330px] h-[120px] bg-purple-700 rounded-[10px] mx-auto p-3
          transform transition duration-700 ease-in-out
          hover:scale-105 hover:shadow-lg
          animate-fadeInUp delay-100
        '>
          <h1 className='text-white text-xl sm:text-2xl font-bold mb-1'>
            City Hall
          </h1>
          <h2 className='text-sm sm:text-[16px] text-white'>1. City Plaza, Yuma, AZ 85364</h2>
          <h2 className='text-sm sm:text-[16px] text-white'>(928) 373-5000</h2>
        </div>

        {/* Box 3 - Social Icons */}
        <div className='
          w-full max-w-[330px] h-[120px] bg-purple-700 rounded-[10px] grid grid-cols-4 place-items-center mx-auto
          transform transition duration-700 ease-in-out
          hover:scale-105 hover:shadow-lg
          animate-fadeInUp delay-200
        '>
          <img src={faceimage} alt="Facebook" className='w-[30px] sm:w-[40px] hover:scale-110 transition-transform' />
          <img src={insta} alt="Instagram" className='w-[30px] sm:w-[40px] hover:scale-110 transition-transform' />
          <img src={youtube} alt="YouTube" className='w-[30px] sm:w-[40px] hover:scale-110 transition-transform' />
          <img src={xee} alt="Xee" className='w-[30px] sm:w-[40px] hover:scale-110 transition-transform' />
        </div>

      </section>
    </>
  )
}

export default WebsiteFooter
