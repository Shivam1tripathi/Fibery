import React from 'react'

const Stepsform = () => {
  return (
    <div className='min-h-80 flex flex-col mt-24'>
        <div className='flex items-center justify-center w-4/5 md:ml-32 max-md:ml-10'>
        <h1 className='text-4xl'>How you can make it happen</h1>
        </div>
        <div className='w-11/12 md:ml-14 flex md:flex-row max-md:flex-col mt-6 max-md:justify-center'>

            <div className="md:w-3/5  flex flex-col pl-8 pr-8 max-md:ml-8 ml-4 max-md:mt-4 max-md:pb-4 justify-center items-start bg-red-100">
                <h1 className='text-4xl font-extrabold text-orange-600'>Step-1</h1>
                <h1 className='text-2xl font-bold mt-1'>Signup for free</h1>
                <p className='font-medium mt-2'>Start using AI space creation and / or templates to test the waters.</p>
            </div>
          
            <div className="md:w-3/5 flex flex-col pl-8 pr-8 max-md:ml-8 ml-4 max-md:mt-4 max-md:pb-4 justify-center items-start bg-green-100">
                <h1 className='text-4xl font-extrabold text-orange-600'>Step-2</h1>
                <h1 className='text-2xl font-bold mt-1'>Build your workspace</h1>
                <p className='font-medium mt-2'>Start integrating any data from existing tools and map your company's processes</p>
            </div> 

            <div className="md:w-3/5 flex flex-col pl-8 pr-8 max-md:ml-8 ml-4 max-md:mt-4 max-md:pb-4 justify-center items-start bg-blue-100">
                <h1 className='text-4xl font-extrabold text-orange-600'>Step-3</h1>
                <h1 className='text-2xl font-bold mt-1'>Share it with your team</h1>
                <p className='font-medium mt-2'>Don't keep Fibery to yourself .Be the hero your company needs and not the one they deserve!</p>
            </div>
              
            <div className="md:w-3/5 flex flex-col pl-4 pr-4 max-md:ml-8 ml-4 max-md:mt-4 max-md:pb-4 justify-center items-start bg-yellow-100">
                <h1 className='text-4xl font-extrabold text-orange-600 mt-12'>Step-4</h1>
                <h1 className='text-2xl font-bold mt-1'>Enjoy the moment that you dared to be different</h1>
                <p className='font-medium mt-2 md:mb-4'>Humans are pack animals-conformity is in our DNA. but you dared to be different by not choosing an Atlassian product. Well done !</p>
            </div>
            
           
        </div>
    </div>
  )
}

export default Stepsform