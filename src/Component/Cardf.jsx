import React from 'react'

const Cardf = (props) => {
  return (
    <>
    <div className='min-h-80 mt-30 flex flex-row justify-between '>
       <div className='md:w-3/5 max-md:w-full max-md:pl-10 max-md:pr-10 md:pl-40 md:pr-40 flex justify-center items-center flex-col md:ml-20'>
               <h1 className='md:text-5xl max-md:text-4xl font-semibold'>{props.Title}</h1>
               <p className='font-medium mt-6'>{props.para}</p>
       </div>
       <div className="w-1/5 flex justify-center items-center max-md:hidden">
               <img className='removebg' src={props.image1} alt="susilunch" />
       </div>
  </div>

  <div className='flex justify-center mt-6 mb-10'>
  <img src={props.image2} alt="" />
  </div>
   </>
  )
}

export default Cardf