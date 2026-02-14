import React from 'react'

function Home() {
  return (
  <>
<div className='min-h-screen text-white bg-cover bg-no-repeat ' id='ali' >
 <nav className=' fixed top-0 left-0 w-full bg-blue-400 flex justify-around item-center py-4 text-lg text-white'>
  <h1 className='text-3xl font-bold text-[#ED2279] '>Shahjee.</h1>
  <ul className=' flex space-x-8'>

    <li> <a href="#home" className='hover:text-[#ED2279]'></a>Home</li>
    <li> <a href="#home"  className='hover:text-[#ED2279] cursor-pointer'></a>About</li>
    <li> <a href="#home"  className='hover:text-[#ED2279]'></a>Service</li>
    <li> <a href="#home"  className='hover:text-[#ED2279] cursor-pointer'></a>Portfolio</li>
  </ul>
   <a href="#contact"> 
    <button className='bg-blue-500 text-black px-5  py-1 rounded-full mr-3 hover:cursor-pointer  '>Contact Me</button>
   </a>
 </nav>

  <section id='home'  className='flex flex-col  md:flex-row justify-around items-center pt-55 px-8 space-y-10 md:space-y-0 gap-30'>
       <div className='w-full '>
       <h1 className='text-3xl font-bold'>Hello I am <span className='text-blue-500'>Shahjee</span></h1>
       <h2>I am a 
       <span> Full-Stack Developer...</span>
       </h2>
  <p>Create Webiste using ang dolor sit amet consectetur adipisicing elit. Reiciendis repellat id in aspernatur, accusamus doloremque fugiat perferendis saepe vel est quam, laudantium pariatur, delectus officiis sequi? Hic eius vero corporis excepturi tempora voluptas, fuga quia dolorum iusto doloribus, magni, quibusdam error. Doloribus alias deleniti consequatur pariatur accusantium, illum totam at.</p>
 <br />

  <div>
    <button className='w-29 h-12 bg-blue-500 rounded-b-lg'>Download CV</button>
  </div>
    </div>
    <div className='w-full '>
     <img src="./src/assets/tajwar.jpg" alt="Not Images Found" className='w-2xl h-95 flex  justify-around border-r-white border-4 shadow-2xl shadow-black object-cover rounded-2xl ' />

    </div>
   
  

  
     {/* </div> */}

   

  </section>
  <br /><br /><br />


    <section className='flex flex-col md:flex-row justify-around gap-20 ml-32 border-red-950 border-2xl'>
         <div className='w-full '>
       <h1 className='text-3xl font-bold'>Hello I am <span className='text-blue-500'>Shahjee</span></h1>
       <h2>I am a 
       <span> Full-Stack Developer...</span>
       </h2>
  <p className='shadow-3xl text-shadow-amber-600'>Create Webiste using ang dolor sit amet consectetur adipisicing elit. Reiciendis repellat id in aspernatur, accusamus doloremque fugiat perferendis saepe vel est quam, laudantium pariatur, delectus officiis sequi? Hic eius vero corporis excepturi tempora voluptas, fuga quia dolorum iusto doloribus, magni, quibusdam error. Doloribus alias deleniti consequatur pariatur accusantium, illum totam at.</p>
 <br />

  <div>
    <button className='w-29 h-12 bg-blue-500 rounded-b-lg'>Download CV</button>
  </div>
    </div>
    <div className='w-full  ml-32'>
     <img src="./src/assets/tajwar.jpg" alt="Not Images Found" className='w-80 h-95 flex  justify-around border-r-white border-4 shadow-2xl shadow-black object-cover rounded-2xl ' />

    </div>
    </section>

</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
  </>
  )
}

export default Home