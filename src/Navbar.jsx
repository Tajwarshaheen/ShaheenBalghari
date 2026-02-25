import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<>
  <nav className='px-5 py-5 bg-purple-900 text-white flex justify-between'> 
    <img src="../src/assets/tajwar.jpg" alt="" className='w-12  h-12 rounded-full' />
    <ul className='flex justify-end'> 
        <li className='mx-5 hover:cursor-pointer '> <Link to="/"> Home</Link>    </li>
        <li className='mx-5 hover:cursor-pointer'> <Link to="/About">  About </Link></li>
       
        <li className='mx-5 hover:cursor-pointer'>Contact</li>
    </ul>
  </nav>

 
</>
)
}

export default Navbar