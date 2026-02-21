import React from 'react'
import image from '../src/assets/website pic.png'
import image2 from '../src/assets/xee.svg'
import image3 from '../src/assets/facebook.svg'
import image4 from '../src/assets/youtube.svg'

function ProjectHome() {
  return (
    <div>


        <section className='grid grid-cols-2  mx-10 my-10 '>

            <div className='my-10 mx-10 p-20 bg-purple-50 shadow-2xl shadow-black w-lg h-80 rounded-2xl'> <h1 className='text-5xl font-bold'>Super <span className='text-purple-500'>change</span></h1>
            <h1 className='text-5xl font-bold mt-3'>Your <span className='text-purple-500'>Workflow</span></h1>
            <p className='mt-4'>The all-in-one Platform most your leight's</p>
            <div className='grid grid-cols-2 gap-3'>
                <button className='bg-purple-600 p-2  mt-10 rounded-lg text-white font-bold hover:cursor-pointer '>Get My Works</button>
                              <button className='bg-purple-100   mt-10 rounded-lg p-2 border-1 font-bold  hover:cursor-pointer'>Get My Moice</button></div></div>
            <div className='mt-10 w-lg h-80 shadow-2xl shadow-black rounded-2xl'>
                <img src={image} alt="Image Not Found" className='w-full h-full rounded-2xl' />

            </div>
        </section>

        <section> 
            <h1 className='text-center text-2xl font-bold'> Powerful <span className='text-purple-500 '>Features </span>to Help You Succeed</h1>
            <div className='grid grid-cols-3 mx-20 my-10'>
                <div className='w-80 bg-purple-300  mx-10 rounded-2xl shadow-2xl shadow-black'><img src={image2} alt="Image Not Found"  className='w-7 mx-10 my-5'/>
                <h1 className='text-2xl font-bold mx-4'>Task Management</h1>
                 <p className='text-lg mx-3 mt-2'>Organize and Priporize your tan tasks with ease</p>
                </div>
             <div className='w-80 bg-purple-300  mx-10 shadow-2xl shadow-black rounded-2xl'><img src={image3} alt="Image Not Found"  className='w-7 mx-10 my-5'/>
                <h1 className='text-2xl font-bold mx-4'>Collaboration</h1>
                 <p className='text-lg mx-3 mt-2'>Work together with your your in tatitude  in real time</p>
                </div>
                  <div className='w-80 bg-purple-300  mx-10 rounded-2xl  shadow-2xl shadow-black'><img src={image4} alt="Image Not Found"  className='w-7 mx-10 my-5'/>
                <h1 className='text-2xl font-bold mx-4'>Analytical</h1>
                 <p className='text-lg mx-3 mt-2'>Organize and Priporize your tan tasks with ease</p>
                </div>
               
            </div>

        </section>


        <section className='grid grid-cols-2 mx-30'>  

            <div className='w-96 h-80 bg-purple-300 rounded-2xl shadow-2xl shadow-black '>
                <h1 className='text-2xl font-bold p-5'>Simple & Transparent Pricing</h1>
                <div className='grid grid-cols-2 mx-2'>
                <div className='w-44 h-60 bg-purple-200 rounded-2xl shadow-2xl shadow-black'><h1 className='text-center mt-3 font-bold'>Basic Plane</h1>
               
                    <h2 className='mt-4 mx-4'>Essential Features</h2>
                    <h2 className='mt-4 mx-4'>Email Support</h2>
             
                </div>
                <div className='w-44 h-60 bg-blue-900'> <h1 className='text-center mt-3 font-bold'>Pro Plane</h1></div>
</div>
            </div>
             <div className='w-96 h-80 bg-purple-300 rounded-2xl shadow-2xl shadow-black '>
                <h1 className='text-2xl font-bold p-5'>Simple & Transparent Pricing</h1>
                <div className='grid grid-cols-2 mx-2'>
                <div className='w-44 h-60 bg-blue-900'><h1>Basic Plane</h1></div>
                <div className='w-44 h-60 bg-blue-900'> Pro Plane</div>
</div>
            </div>
           
        </section>
    </div>
  )
}

export default ProjectHome