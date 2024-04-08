import React from 'react'

const Feedback = (props) => {
  return (
    <div className='mt-16 min-h-32'>
        <h1 className='text-3xl font-bold md:ml-20 max-md:mb-3'>Some real feedback:</h1>
        <img className='absolute -z-10 md:w-2/4 md:right-28 blacknwhite opacity-60' src={props.bgimage} alt="background" />

        <div className='md:min-h-12 md:ml-32 sm:m-10 md:w-10/12 flex md:items-center md:justify-center flex-col max-md:min-h-5'>
            <p className='md:text-4xl max-md:3xl max-md:font-semibold md:font-normal p-10'>{props.feedback}</p>

            <div className='mb-10 mt-16 md:w-4/5 max-sm:w-full flex max-md:flex-col md:justify-between md:items-center'>
              <div className='flex flex-row'>
              <img src={props.profileimage} className='removebg w-20 h-20 rounded-full' alt="" />
              <div className='mt-6 ml-5'>
                <h1 className='text-xl font-medium'>{props.username}</h1>
                <p className='font-medium text-gray-600'>{props.position}</p>
              </div>
              <img src={props.companylogo} className='removebg w-20 h-12 md:mt-4 md:ml-8' alt="company logo" />
              </div>  
                <button className='bg-slate-900 w-64 h-12 text-white font-bold max-md:mt-8 max-md:ml-8'>{props.button}</button>
            </div>
        </div>
    </div>
  )
}

export default Feedback