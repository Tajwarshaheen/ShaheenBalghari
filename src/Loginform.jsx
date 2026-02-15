import React from 'react'

function Loginform() {
  return (
   <>
    <section className='w-full min-h-screen bg-purple-900 flex text-center justify-items-center'>
        <div className='w-lg bg-purple-100 h-96 mx-96 mt-20 rounded-2xl'>
  <h1 className='text-3xl font-bold text-white '>Login Page</h1>
       <input type="text" placeholder='Enter Your Name'  className='w-68 bg-red-300 p-3 mt-10 rounded-2xl border-none'/>
       <input type="text" placeholder='Enter Your Gmail'  className='w-68 bg-red-300 p-3 mt-10 rounded-2xl border-none '/>
       <br />
        <button className='w-68 bg-purple-400 mt-10 p-2 rounded-2xl cursor-pointer hover:bg-purple-300'>Join us</button>      
        </div>
   



    </section>
   
   </>
  )
}

export default Loginform