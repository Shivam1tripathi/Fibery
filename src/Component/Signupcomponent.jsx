import React from 'react'

const Signupcomponent = () => {
  return (
    <div className='he flex justify-center items-center flex-row'>
      <div className='w-3/5'>
      <div className='flex flex-row '>
        <h1 className='text-5xl font-bold black-ops text-orange-500'>Signup for free</h1>
        <p className='cln text-sm text-green-500'>* No Credit card Required</p>
        </div>
        <p className='mt-6'>Start building your own work and knowledge management hub</p>
        <button className='bg-black text-white w-24 h-12 rounded font-medium mt-6'>Sign Up</button>
      </div>
      <div className='w-1/5 max-md:hidden'>
        <img src="Images/sign-up.png" alt="" />
      </div>
        
    </div>
  )
}

export default Signupcomponent
