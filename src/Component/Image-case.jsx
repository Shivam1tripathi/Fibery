import React from 'react'

const Imagecase = () => {
  return (
    <div className=" min-h-40 mt-20">
        <div className='h-10 flex justify-between'>
           <p className='font-semibold fs-5 text-slate-700 md:ml-20 max-md:ml-4'>Be among 300+ cool companies</p>
           <a href='/' className='font-semibold text-green-500 cln md:mr-10 max-md:mr-2'>Check out all customer Stories ➡️</a>
        </div>
        <div className="min-h-30 flex flex-row justify-evenly mt-5 mb-4 max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center flex-wrap">
            <img src="Images/Image-case/Kontur.png" className='removebg' alt="" />
            <img src="Images/Image-case/Lemonade.png" className='removebg' alt="" />
            <img src="Images/Image-case/Nzx.png" className='removebg' alt="" />
            <img src="Images/Image-case/Optiv.png" className='removebg' alt="" />
            <img src="Images/Image-case/Plex.png" className='removebg' alt="" />
            <img src="Images/Image-case/Rosetta-stone.png" className='removebg' alt="" />
        </div>
    </div>
  )
}

export default Imagecase