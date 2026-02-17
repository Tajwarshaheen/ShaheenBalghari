import React from 'react'
import image from '../src/assets/Gemini_Generated_Image_wmourwmourwmourw.png'

function WebsiteAbout() {
  return (
    <>
      {/* Top Image with Animation + Hover */}
      <div className='w-full overflow-hidden rounded-lg group'>
        <img
          src={image}
          alt="Image Not Found"
          className='
            w-full h-auto object-cover
            transform transition duration-700 ease-in-out
            group-hover:scale-105
            hover:brightness-110
            animate-fadeInUp
          '
        />
      </div>

      {/* Text Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-10 text-justify'>
        
        {/* Heading Animation */}
        <h1 className='
          text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-900
          animate-fadeInUp
        '>
          A Valley of Balghar Growth
        </h1>

        {/* Paragraph Animation + Hover */}
        <p className='
          text-base sm:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10 text-gray-700
          transition duration-500 ease-in-out
          animate-fadeIn
          hover:text-purple-900
        '>
          Yumas proximity to the Colorado River and robust water entitlements provides a reliable foundation for development, ensuring sustainable resources for industries to thrive. With over 320 days of sunshine, a strategic location near California, Mexico, and the Phoenix Metro area, and a strong economy supported by a highly skilled and reliable labor force, its no surprise Arizona was ranked 6th in PwCs 2022 rankings of Aerospace Manufacturing Attractiveness.
        </p>
      </section>
    </>
  )
}

export default WebsiteAbout
