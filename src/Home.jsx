// 






import React from 'react'

function Home() {
  return (
    
  <>
   <section className='grid grid-cols-1 md:grid-cols-2  bg-purple-100 h-96   gap-20' >
    <div className=' w-[400px]   mt-[120px] ml-[60px]'>
            <h1 className='font-bold'>The Best Phone In This Town</h1>
        <p className='py-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe quos neque impedit vel delectus quod sequi excepturi fugit. Suscipit eligendi, alias neque quos amet harum dicta laudantium maxime ad?</p>
        <div className=' flex gap-10'>
    <button className='bg-purple-600 w-24  h-10 rounded-2xl mt-5 hover:bg-purple-500 cursor-pointer '>Click me</button>
     <button className='bg-purple-600 w-28  h-10 rounded-2xl mt-5 hover:bg-purple-500  cursor-pointer'>Contact me</button>
        </div> 
    </div> 
    
    <div className=' w-[400px]  mt-[120px]' >
        <img src="../src/assets/tajwar.jpg" alt=""  className='w-76 h-76 mr-96 -mt-10  rounded-full shadow shadow-amber-950'/>

     
    </div>


  </section>
  
  </>)
}

export default Home