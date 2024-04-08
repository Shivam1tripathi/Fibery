import React from 'react'

const Page2 = () => {
  return (
    <div className=' min-h-96 mt-32 flex flex-row items-center justify-center'>
        <div className='md:w-4/5 max-sm:w-full h-full flex items-center flex-col justify-center'>
        <p className='lora md:text-6xl max-md:text-4xl font-semibold md:ml-28 md:mr-1 mt-4 max-md:ml-10'> Bring Work and Knowledge under the same roof</p>
        <p className='text-xl md:ml-28 md:mr-32 font-normal mt-3 max-md:ml-10'>One tool for documents, a second tool for task management and another for diagrams. The end result? Poor connectivity.</p>
        <p className='text-xl md:ml-28 md:mr-32 font-normal mt-3 mb-10 max-md:ml-10'>Connect structure data(e.g. <strong>tables,kanban boards</strong>) with unstructured data(e.g. <strong>documents</strong>) and always stay in context</p>
        </div>

        <div className='md:w-1/5 max-h-fit flex justify-center max-md:hidden'>
        <img src="Images/Hand-shake.png" className='w-20 removebg h-20' alt="Handshake" />
        </div>
        
    </div>
  )
}

export default Page2