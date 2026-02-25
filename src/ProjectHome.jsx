import React from 'react'
import image from '../src/assets/website pic.png'
import image2 from '../src/assets/xee.svg'
import image3 from '../src/assets/facebook.svg'
import image4 from '../src/assets/youtube.svg'

function ProjectHome() {
  return (
    <div className='bg-purple-100'>

{/* Home Pages */}
        <section className='grid grid-cols-2  mx-10 my-10'>

            <div className='my-10 mx-10 p-20 bg-purple-50 shadow-2xl shadow-black w-lg h-80 rounded-2xl'> <h1 className='text-5xl font-bold'>Super <span className='text-purple-500'>change</span></h1>
            <h1 className='text-5xl font-bold mt-3'>Your <span className='text-purple-500'>Workflow</span></h1>
            <p className='mt-4'>The all-in-one Platform most your leight's</p>
            <div className='grid grid-cols-2 gap-3'>
                <button className='bg-purple-600 p-2  mt-10 rounded-lg text-white font-bold hover:cursor-pointer '>Get My Works</button>
                              <button className='bg-purple-100   mt-10 rounded-lg p-2 border font-bold  hover:cursor-pointer '>Get My Moice</button></div></div>
            <div className='mt-10 w-lg h-80 shadow-2xl shadow-black rounded-2xl'>
                <img src={image} alt="Image Not Found" className='w-full h-full rounded-2xl' />

            </div>
        </section>
{/*About Pages  */}
        <section className=' p-10'> 
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


{/* Project Pages */}
{/* section 1 */}
        <section className='grid grid-cols-2 mx-10 w-xxl justify-center  mt-10 '>  

            <div className='w-lg h-80 bg-purple-300 rounded-2xl shadow-2xl shadow-black mx-10 '>
                <h1 className='text-2xl font-bold p-5 text-center'>Simple & Transparent Pricing</h1>
                <div className='grid grid-cols-2 mx-2'>
                    {/* div-1 */}
                <div className='w-44 h-60 bg-purple-200 rounded-2xl shadow-2xl shadow-black ms-10'><h1 className='text-center mt-3 font-bold'>Basic Plane</h1>
               
                    <h2 className='mt-4 mx-5'>Essential Features</h2>
                    <h2 className='mt-4 mx-5'>Email Support</h2>
                    <button className='bg-blue-400 mx-5 mt-10 w-34 p-2 rounded-lg cursor-pointer'> Get Started</button>
             
                </div>
                {/* div-2 */}
                 <div className='w-44 h-60 bg-purple-400 rounded-2xl shadow-2xl shadow-black ms-10'><h1 className='text-center mt-3 font-bold'>Pro Plane</h1>
               
                    <h2 className='mt-4 mx-5'>Essential Features</h2>
                    <h2 className='mt-4 mx-5'>Email Support</h2>
                    <button className='bg-blue-100 mx-5 mt-10 w-34 p-2 rounded-lg cursor-pointer'> Get Started</button>
                    </div></div></div>
                   <div className='w-lg h-80 bg-purple-300 rounded-2xl shadow-2xl shadow-black '>
                <div className='grid grid-cols-2 mx-2'>



                    {/* Section 2 */}
                  {/* div1 */}
                <div className='w-44 h-64 bg-purple-200 rounded-2xl ms-10 shadow-2xl shadow-black mt-10'><h1 className='text-center mt-3 font-bold'>Basic Plane</h1>
               
                    <h2 className='mt-4 mx-5'><span className='font-bold'>$</span><span className='text-3xl font-bold'>19/</span><span>month</span></h2>
                   <h2 className='mt-4 mx-5'>Essential features</h2>
                    <h2 className='mt-4 mx-5'>Email Support</h2>
                    <button className='bg-blue-400 mx-5 mt-5 w-34 p-2 rounded-lg cursor-pointer'> Get Started</button>
             
                </div>
                {/* div-2 */}
                  <div className='w-44 h-64 bg-purple-200 rounded-2xl ms-10 shadow-2xl shadow-black mt-10'>
                     <h1 className='text-lg font-bold text-center  bg-blue-600 w-36 ms-4 text-white rounded-lg mt-2'> Most Popular</h1>
                    <h1 className='text-center mt-2 font-bold'>Proc Plane</h1>
               
                    <h2 className=' mx-5'><span className='font-bold'>$</span><span className='text-3xl font-bold'>49/</span><span>month</span></h2>
                   <h2 className='mt-4 mx-5'>Essential features</h2>
                    <h2 className='mt-4 mx-5'>Email Support</h2>
                    <button className='bg-blue-400 mx-5 mt-5 w-34 p-2 rounded-lg cursor-pointer'> Get Started</button>
             
                </div>
</div>
            </div>
        </section>


        {/* Login Pages */}


        <section>
             <div className='mx-96 my-40 bg-red-800'>  
                <h1> Frequently Asked <span className='text-purple-400 text-2xl  font-bold text-center'>Question</span></h1>

             </div>
        </section>
    </div>
  )
}

export default ProjectHome