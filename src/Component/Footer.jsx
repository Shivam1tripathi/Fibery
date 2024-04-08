import React from 'react'
import './Component.css';
const Footer = () => {
  return (
<div className='min-h-96 flex flex-col'>
         <div className='min-h-3/4 flex flex-row max-sm:justify-between flex-wrap'>

          <div className="lg:w-1/5 max-lg:w-6/12 flex justify-start items-start flex-col lg:p-12 p-4">
            <h1 className='flex flex-row font-bold text-xl'>Fibery <img src="Images/leaf.jpeg" className='removebg w-8' alt="leaf" /></h1>
            <h2 className='mt-2'>Work & Knowledge </h2>
            <h2>Management hub</h2>
            <h2 className='md:mt-20 mt-16 text-xs'>⭐⭐⭐⭐⭐</h2>
            <h2 className='font-semibold'>Rated 4.8 on G2 and Capterra</h2>
          </div>

          <div className="lg:w-1/5 max-lg:w-6/12 flex justify-start items-start flex-col lg:p-12 p-4">
            <h1 className='font-bold text-xl'>Solutions</h1>
            <h2 className='mt-2 font-medium text-sm'>No Code</h2>
            <h2 className='mt-2 font-medium text-sm'>Product Management</h2>
            <h2 className='mt-2 font-medium text-sm'>User Research</h2>
            <h2 className='mt-2 font-medium text-sm'>Start up</h2>
            <h2 className='mt-2 font-medium text-sm'>Software development</h2>
            <h2 className='mt-2 font-medium text-sm'>Digital agency</h2>
            <h2 className='md:mt-20 mt-2 font-medium text-sm'>Template Library</h2>
          </div>

          <div className="lg:w-1/5 max-lg:w-6/12 flex justify-start  items-start flex-col lg:p-12 p-4">
          <h1 className='font-bold text-xl'>Product</h1>
            <h2 className='mt-2 font-medium text-sm'>Features</h2>
            <h2 className='mt-2 font-medium text-sm'>Fibery Ai</h2>
            <h2 className='mt-2 font-medium text-sm'>Pricing </h2>
            <h2 className='mt-2 font-medium text-sm'>Fibery vs.X</h2>
            <h2 className='mt-2 font-medium text-sm'>Customer stories</h2>
            <h2 className='mt-2 font-medium text-sm'>Integrations</h2>
            <h2 className='mt-2 font-medium text-sm'>Changelog</h2>
            <h2 className='mt-2 font-medium text-sm'>Partners program</h2>
            <h2 className='mt-2 font-medium text-sm'>Concierge program</h2>
            <h2 className='mt-2 font-medium text-sm'>Startup program</h2>
            <h2 className='mt-2 font-medium text-sm'>Anxiety</h2>
          </div>

          <div className="lg:w-1/5 max-lg:w-6/12 flex justify-start  items-start flex-col lg:p-12 p-4">
          <h1 className='font-bold text-xl'>Resources</h1>
            <h2 className='mt-2 font-medium text-sm'>User Guide</h2>
            <h2 className='mt-2 font-medium text-sm'>Blog</h2>
            <h2 className='mt-2 font-medium text-sm'>Community</h2>
            <h2 className='mt-2 font-medium text-sm'>Webinars & Tutoeials</h2>
            <h2 className='mt-2 font-medium text-sm'>API</h2>
            <h2 className='mt-2 font-medium text-sm'>Status</h2>
            <h2 className='mt-2 font-medium text-sm'>Security & Privacy</h2>
            <h2 className='mt-2 font-medium text-sm'>Cookie settings</h2>
          </div>

          <div className="lg:w-1/5 max-lg:w-6/12 flex justify-start  items-start flex-col lg:p-12 p-4">
          <h1 className='font-bold text-xl'>Team</h1>
            <h2 className='mt-2 font-medium text-sm'>About us</h2>
            <h2 className='mt-2 font-medium text-sm'>Open startup</h2>
            <h2 className='mt-2 font-medium text-sm'>Startup diary </h2>
            <h2 className='mt-2 font-medium text-sm'>Careers</h2>
            <h2 className='mt-2 font-medium text-sm'>Remote</h2>
          </div>
          
         </div>
         <div className='min-h-1/4 '>
               <div className='h-2/4 flex justify-center'>
                <input type="text" className='md:w-2/4 max-md:w-3/4 border-b-2 bg-transparent border-black mt-4 pl-2 text-gray-800' placeholder='Search for a template, space or integration....'/>
                <button className='mt-4 '><i className="fa-solid fa-magnifying-glass bg-transparent fa-lg p-2"/></button>
               </div>
               <div className='min-h-2/4  flex max-md:flex-col justify-between md:p-8 max-md:p-4'>
                <div className='flex flex-row max-md:justify-between'>
                  <h1 className='font-bold md:ml-10 mt-4 md:text-2xl max-md:texl-sm'>&copy; Fibery Limited</h1>
                  <a href='/' className='font-bold  md:ml-8 mt-4 md:text-lg max-md:text-xs text-gray-600 hover:border-b-2 border-gray-600'>Terms</a>
                  <a href='/' className='font-bold  md:ml-8 mt-4 md:text-lg max-md:text-xs text-gray-600 hover:border-b-2 border-gray-600'>Privacy Policy</a>
                  <a href='/' className='font-bold  md:ml-8 mt-4 md:text-lg max-md:text-xs text-gray-600 hover:border-b-2 border-gray-600' >Cookies Policy</a>
                </div>
                <div className='flex flex-row max-md:items-center max-md:justify-center ml-4 max-md:mt-3'>
                  <a href="/"><img className='removebg md:w-10 md:hover:w-11 max-md:w-6 max-md:hover:w-7 mr-4' src="Images/mail.png" alt="mail" /></a>
                  <a href="/"><img className='removebg md:w-10 md:hover:w-11 max-md:w-6 max-md:hover:w-7 mr-4' src="Images/twiter.png" alt="twiter" /></a>
                  <a href="/"><img className='removebg md:w-10 md:hover:w-11 max-md:w-6 max-md:hover:w-7 mr-4' src="Images/Yt-Logo.png" alt="YT" /></a>
                  <a href="/"><img className='removebg md:w-10 md:hover:w-11 max-md:w-6 max-md:hover:w-7 mr-4' src="Images/linkedin.png" alt="LinkedIn" /></a>
                </div>
               </div>
         </div>
</div>
  )
}

export default Footer