import React from 'react'

function Navbar() {
  return (
<>
  <nav className='px-5 py-5 bg-purple-900 text-white flex justify-between'> 
    <img src="../src/assets/tajwar.jpg" alt="" className='w-12  h-12 rounded-full' />
    <ul className='flex justify-end'> 
        <li className='mx-5 hover:cursor-pointer '>Home</li>
        <li className='mx-5 hover:cursor-pointer'>About</li>
        <li className='mx-5 hover:cursor-pointer'>Product</li>
        <li className='mx-5 hover:cursor-pointer'>Contact</li>
    </ul>
  </nav>

  <section className='flex justify-between bg-purple-100 h-96 py-20  pl-9' >
    <div className=' '>
        <div className='text-4xl '>

            The Best Phone In This Town
        </div>
        <p className='py-3 w-1/3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe quos neque impedit vel delectus quod sequi excepturi fugit. Suscipit eligendi, alias neque quos amet harum dicta laudantium maxime ad?</p>
        <div className=' flex gap-10'>
    <button className='bg-purple-600 w-24  h-10 rounded-2xl mt-5 hover:bg-purple-500 cursor-pointer '>Click me</button>
     <button className='bg-purple-600 w-28  h-10 rounded-2xl mt-5 hover:bg-purple-500  cursor-pointer'>Contact me</button>
        </div> 
    </div> 
    
    <div >
        <img src="../src/assets/tajwar.jpg" alt=""  className='w-76 h-76 mr-96 -mt-10  rounded-full shadow shadow-amber-950'/>

     
    </div>


  </section>
</>
)
}

export default Navbar