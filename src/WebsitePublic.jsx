import React from 'react'
import image from '../src/assets/public.png'

function WebsitePublic() {
  return (
    <>
      <section className="overflow-hidden">
        
        {/* Heading Animation */}
        <h1 className='
          text-xl sm:text-2xl lg:text-3xl font-bold px-4 sm:px-10 lg:px-20 
          mt-10 py-5 text-purple-900
          animate-fadeInUp
        '>
          A Leader in Cross-Border Collaboration
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
            A Leader in Cross-Border Collaboration
            Its strategic location, less than 30 minutes from the U.S.-Mexico border, allows Yuma to serve as a gateway for cross-border manufacturing and partnerships. Advanced manufacturing enterprises can capitalize on bi-national resources, skilled labor, and trade opportunities. Yuma also offers a Foreign Trade Zone option to expedite and coordinate site and facility planning, making it a key player in the global manufacturing landscape.
          </p>
        </div>
      </section>
    </>
  )
}

export default WebsitePublic
