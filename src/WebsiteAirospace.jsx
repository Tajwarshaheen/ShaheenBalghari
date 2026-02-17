import React from 'react'
import image from '../src/assets/Airplane pic.png'

function WebsiteAirospace() {
  return (
    <>
      <section className="overflow-hidden">
        
        {/* Heading Animation */}
        <h1 className='
          text-xl sm:text-2xl lg:text-3xl 
          font-bold px-4 sm:px-10 lg:px-20 
          mt-10 py-5 text-purple-900
          animate-fadeInUp
        '>
          A Gateway to Aerospace Excellence
        </h1>

        <div className='w-full max-w-[1200px] mx-auto px-4 sm:px-10'>
          
          {/* Image Hover + Animation */}
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image}
              alt="Image Not Found"
              className='
                w-full h-auto object-cover rounded-lg
                transform transition duration-700 ease-in-out
                group-hover:scale-110
                hover:brightness-110
              '
            />
          </div>

          {/* Paragraph Animation + Hover */}
          <p className='
            text-justify text-base sm:text-lg lg:text-xl 
            mt-6 text-gray-700
            transition duration-500 ease-in-out
            hover:text-purple-900
            animate-fadeIn
          '>
            A Gateway to Aerospace Excellence
            With proximity to military testing grounds like the Yuma Proving Grounds and Marine Corps Air Station, companies have unique access to testing facilities, skilled personnel, and supportive community partnerships. Along with tax savings and development grants, Yuma offers an ideal environment for innovation and expansion in aerospace technology and defense manufacturing.
          </p>
        </div>
      </section>
    </>
  )
}

export default WebsiteAirospace
