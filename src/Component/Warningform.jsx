import React, { useState } from 'react'

const Warningform = (props) => {
  const [count1,setcount1]=useState(235);
  const [count2,setcount2]=useState(194);
  const adding1=()=>{
    setcount1(count1+1);
  }
  const adding2=()=>{
    setcount2(count2+1);
  }
  return (
    <div className='min-h-80 flex flex-row mt-20'>
        <div className='md:w-10/12 max-sm:w-full flex flex-col md:ml-20 max-sm:ml-2 justify-center '>
          <h1 className=' text-2xl font-bold '>Redically honest warning:</h1>
          <div className= {`md:w-4/5 min-h-40 ${props.bgcolor} flex justify-center rounded md:p-12 max-sm:p-2 flex-col mt-4`}>
            <p className='text-2xl'>{props.para}</p>
            <div className='w-80 h-10 flex flex-row mb-3'>
              <button className='ml-4 max-sm:mt-2 md:mt-4 w-40 h-10 flex items-center justify-center bg-white rounded	' onClick={adding1}>{props.emoji1} {count1}</button>
              <button className='ml-4 max-sm:mt-2 md:mt-4 w-40 h-10 flex items-center justify-center bg-white rounded	'onClick={adding2}>{props.emoji2} {count2}</button>
            </div>
          </div>
        </div>
        <div className='w-1/12 flex items-end max-sm:hidden'>
          <img className='removebg' src="Images/warningformpic.png" alt="" />
        </div>

    </div>
  )
}

export default Warningform