import React from 'react'
import '../Component.css';
const Signup = () => {
  return (
    <div className='min-h-60 flex flex-row '>

        <div className=" md:w-3/4 max-sm:w-full  flex flex-col md:ml-32 max-md:ml-12 justify-center"> 
        <div className="flex">
        <input className=' max-md:h-8 max-md:w-56 md:h-14 md:w-96 bg-transparent border-b-4 border-black font-medium fs-5 px-3' type="text" placeholder='Enter your mail'/>
        <button className=' bg-green-500 md:w-32 md:h-12 max-md:h-16 font-bold ml-4 text-white'>Sign up</button>
        </div>
        <h7 className='mt-3 cln text-gray-700'>Keep Work And Life Separate By Using Your Work Email</h7>
        </div>
        <img src="images/NO-code.png" className=' md:w-32 md:h-32 mt-3 max-md:hidden' alt='no code'/>
        <img src="images/green-box.png" className='w-12 h-12 max-md:hidden mt-48' alt="" />
    </div>
  )
}

export default Signup