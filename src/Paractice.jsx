import React from 'react'

function Paractice() {
  return (
    <>
   <section className='min-h-screen bg-blue-900 flex flex-col md:flex-row items-center justify-center text-white p-6 md:p-10 gap-10 '>
        
         <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0 bg-green-800'> 
          <img 
            src="../src/assets/tajwar.jpg"
            className="w-64 h-64 md:w-85 md:h-85 rounded-full shadow-xl border-blue-100 border-4 object-cover" 
            alt="Tajwar Shaheen"
          />
        </div>
       
        <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0 bg-green-800'>  <img 
            src="../src/assets/tajwar.jpg"
            className="w-64 h-64 md:w-85 md:h-85 rounded-full shadow-xl border-blue-100 border-4 object-cover" 
            alt="Tajwar Shaheen"
          /></div>    

        
         
     </section>


     <section className='min-h-screen bg-blue-900 flex flex-col md:flex-row items-center justify-center text-white p-6 md:p-10 gap-10 '>
    <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0 bg-green-800'> 
           <img 
            src="../src/assets/tajwar.jpg"
            className="w-64 h-64 md:w-85 md:h-85 rounded-full shadow-xl border-blue-100 border-4 object-cover" 
            alt="Tajwar Shaheen"
          /></div>
      <div className='w-full md:w-1/2 bg-[#484038]  text-center mt-30 flex justify-center'><img src="./src/assets/tajwar.jpg" alt=""    className="w-64 h-64 md:w-85 md:h-85 rounded-full shadow-xl border-blue-100 border-4 object-cover" /></div>
     </section>
    </>
  )
}

export default Paractice