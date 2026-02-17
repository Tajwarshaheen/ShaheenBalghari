import React from 'react'
import image from '../src/assets/Manufacturing.png'

function WebsiteManufacturing() {
  return (
    <>
      <section className="overflow-hidden">
        
        {/* Heading Animation */}
        <h1 className='
          text-xl sm:text-2xl lg:text-3xl font-bold px-4 sm:px-10 lg:px-20 
          mt-10 py-5 text-purple-900
          animate-fadeInUp
        '>
          A Center for Precision Manufacturing
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
            text-justify text-base sm:text-lg lg:text-xl mt-6 text-gray-700
            transition duration-500 ease-in-out
            hover:text-purple-900
            animate-fadeIn
          '>
            A Center for Precision Manufacturing
            From robotics to semiconductor development, Yuma provides significant tax incentives, access to skilled technical workers, and proximity to suppliers and markets in California and Mexico. Additionally, Yuma’s logistics network of rail and interstate connections ensures efficient supply chain operations, ideal for high-tech manufacturing.
          </p>
        </div>
      </section>
    </>
  )
}

export default WebsiteManufacturing
