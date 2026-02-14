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

  <section>
    <div className='bg-purple-100 h-96 py-20  pl-9'>
        <div className='text-6xl '>

            The Best Phone In This Town
        </div>
    </div>
  </section>
</>
)
}

export default Navbar