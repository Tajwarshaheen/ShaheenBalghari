import React from 'react'

function Websiteloginpage() {
  return (
    <>
      <section className='px-4 sm:px-8 lg:px-0'>
        <section className='
          w-full max-w-[1100px] h-auto sm:h-[105vh] bg-white mx-auto rounded-2xl border-2 shadow-lg
          animate-fadeInUp
        '>

          {/* Top Bar Animation */}
          <h1 className='bg-purple-800 p-2 rounded-t-[8px] animate-fadeIn'></h1>

          {/* Heading */}
          <h1 className='text-2xl sm:text-3xl mx-5 mt-5 font-bold text-gray-800 animate-fadeInUp'>
            Move, Grow, or Start a Business in Yuma
          </h1>

          {/* Description */}
          <p className='mx-5 text-base sm:text-[20px] mt-2 text-gray-600 animate-fadeIn'>
            Connect with Yuma Economic Development today and explore how Yuma can support your business goals.
          </p>

          {/* Form Inputs */}
          {['Name', 'Company Name', 'Email Address', 'Phone No', 'Industry', 'Message/Additional Information'].map((placeholder, index) => (
            <input
              key={index}
              type={placeholder === 'Email Address' ? 'email' : 'text'}
              placeholder={placeholder}
              required={placeholder === 'Email Address'}
              className={`
                w-[90%] h-[50px] mx-auto mt-5 block bg-white rounded-[7px] border
                px-3 transition duration-500 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-purple-500
                hover:border-purple-500
                animate-fadeInUp
                delay-${index * 100}
              `}
            />
          ))}

          {/* Submit Button */}
          <button className='
            block mx-auto sm:ml-auto sm:mr-10 w-[180px] sm:w-[200px] h-[50px] bg-purple-600 p-3 rounded-3xl mt-6
            font-bold text-white cursor-pointer
            transition duration-500 ease-in-out
            hover:bg-purple-300 hover:text-purple-800 hover:scale-105
            animate-fadeInUp
          '  id='btn'>
            Submit Form
          </button>

        </section>
      </section>
    </>
  )
}

export default Websiteloginpage
