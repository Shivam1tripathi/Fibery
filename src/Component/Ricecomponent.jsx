import React from 'react'

const Ricecomponent = () => {
  return (
    <div className='min-h-96 max-md:p-5 w-full md:p-20'>
        <h1 className='font-semibold text-2xl max-md:text-3xl '> <em>All this content is for you, not for SEO (doesn't work anyway)</em></h1>
        <div className='w-full mt-10 flex flex-row'>
            <div className='max-md:w-3/5 bg-slate-200 flex justify-center items-center max-md:hidden'><img className='w-11/12 h-11/12' src="Images/Rice.png" alt="" /></div>
            <div className='flex p-8 max-md:p-2 max-md:w-full md:w-3/5 flex-col'>
                <h1 className=' text-xl font-bold'>Rice Framework & Scoring: A Guide to Successful Prioritization</h1>
                <p className='mt-6'>There are many prioritization framework out there, and RICE is probably one of the more popular kids on the block. We'll show you how to calculate it and whether it's useful in your your day-to-day job as a PM.</p>
                <div className='flex flex-row mt-5'>
                    <img className='removebg max-md:w-20 max-md:h-20 max-md:mt-6' src="Images/Peter.png" alt="" />
                    <div className='ml-5'>
                        <h1>Product Management - November 22,2023 /<span className='text-gray-600'> 14 min read</span></h1>
                        <h1 className='font-bold'>Peter Levay, <span className='text-gray-600 font-semibold'>Everything content at Fibery</span></h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='2/5 flex flex-row justify-center md:items-center max-md:justify-start mt-5 max-md:flex-wrap'>
            <div className=' flex flex-row md:ml-5'>
                <img className='removebg w-16 h-16' src="Images/Animal-sleep.png" alt="animal" />
                <div>
                    <h1 className='font-bold'>Radicaly honest blog</h1>
                    <a className='text-blue-600 font-bold' href="/">fibery.io/blog</a>
                </div>
            </div>
            <div className='flex flex-row md:ml-20'>
                <img className='removebg w-16 h-16' src="Images/sun.png" alt="sun" />
                <div>
                    <h1 className='font-bold'>Fibery community</h1>
                    <a className='text-blue-600 font-bold' href="/">community.fibery.io</a>
                </div>
            </div>
            <div className='flex flex-row md:ml-20'>
                <img className='removebg w-16 h-16' src="Images/twiter.png" alt="twitter" />
                <div>
                    <h1 className='font-bold'>Fibery on twitter</h1>
                    <a className='text-blue-600 font-bold' href="/">@fibery_io</a>
                </div>
            </div>
            <div className='flex flex-row md:ml-20'>
                <img className='removebg w-16 h-16' src="Images/YT-Logo.png" alt="twitter" />
                <div>
                    <h1 className='font-bold'>Fibery on Youtube</h1>
                    <a className='text-blue-600 font-bold' href="/">Ring the bell!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ricecomponent