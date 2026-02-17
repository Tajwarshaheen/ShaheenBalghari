import React from 'react'
import balgharPic from '../src/assets/Balghar-pic.jpg'

function WebsiteHome() {
  return (
    <>
      <section className="overflow-hidden">
        <div className='
          p-6 sm:p-10 lg:p-20 mx-4 sm:mx-20 lg:mx-[330px] 
          flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10
        '>
          
          {/* Profile Image with Hover + Animation */}
          <img
            src={balgharPic}
            alt="Balghar"
            className='
              w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full
              transform transition duration-700 ease-in-out
              hover:scale-110 hover:brightness-110
              animate-fadeInUp
            '
          />

          {/* Text Content with Animation */}
          <div className='text-center sm:text-left'>
            <p className='
              text-lg sm:text-2xl font-bold text-purple-500 
              transition-all duration-500 ease-in-out
              animate-fadeInUp delay-100
              hover:text-purple-700
            '>
              City of
            </p>
            <p className='
              text-2xl sm:text-4xl font-bold text-purple-900 
              transition-all duration-500 ease-in-out
              animate-fadeInUp delay-200
              hover:text-purple-700
            '>
              Balghar
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default WebsiteHome
