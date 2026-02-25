import React from 'react'
import image1 from '../src/assets/facebook.svg'
import image2 from '../src/assets/youtube.svg'
import image3 from '../src/assets/instagram.svg'
import image4 from '../src/assets/react.svg'
import image5 from '../src/assets/xee.svg'
import image6 from '../src/assets/facebook.svg'
import GitHubIcon from '@mui/icons-material/GitHub';


function Googlepage() {
  return (
    <div >

    <section className='w-full min-h-screen bg-black fixed'>
     <div className='w-xl h-xl mt-56   mx-80 '  >
        <h1 className='text-white text-6xl font-bold text-center '> <span className='text-blue-500'>G</span>
         <span className='text-red-600'>o</span>
         <span className='text-yellow-300'>o</span>
         <span className='text-blue-500'>g</span>
         <span className='text-green-500 '>l</span>
         <span className='text-red-500'>e</span>
          </h1> 
       <div className='w-full  '>

          <input type="text" placeholder='⚡ Search Google or type a ...'  className='h-12 bg-white text-black rounded-full mt-10 sm:w-3xs md:w-xl lg:w-xl '/>



       </div>
                 <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6  mt-5   gap-5 ms-15'>
              <img src={image1}  alt="Images Not Found"   className='w-14 ' />
              <img src={image2}  alt="Images Not Found"   className='w-14' /> 
              <img src={image3}  alt="Images Not Found"   className='w-14' /> 
              <img src={image4}  alt="Images Not Found"   className='w-14' /> 
              <img src={image5}  alt="Images Not Found"   className='w-14' /> 
              <img src={image6}  alt="Images Not Found"   className='w-14' /> 
               </div>
     </div>
    </section>
     
    
    </div>
  )
}

export default Googlepage