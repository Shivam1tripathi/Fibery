import React, { useState } from 'react';
import './Component.css';

// const Navbar = () => {
//   return (
//  <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand d-flex flex-row" href="/"><span className='fs-3'>Fibery</span>
//      <img src="images/leaf.jpeg" alt="h" style={{width:"40px",marginLeft:"0px"}}/>
//      <h5 className='nav-title'>+AI Now!</h5>
//      </a>
    
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle ms-3 fs-5 text-black" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Solutions
//           </a>
//           <ul className="dropdown-menu ">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle ms-3 fs-5 text-black" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Product
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>

//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle ms-3 fs-5 text-black" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            Resources
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active ms-3 fs-5" aria-current="page" href="/">Pricing</a>
//         </li>
//       </ul>
//       <a className='fs-5 me-3 fw-medium' href="/">Login</a>
//       <button type="button" class="btn btn-outline-dark fs-5 me-3">Get Demo</button>
//       <button type="button" class="btn btn-dark fs-5 me-3">Sign up</button>
//     </div>
//   </div>
// </nav>
 
//   )
// }





function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [arrowRotation1, setArrowRotation1] = useState('rotate-0');

  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [arrowRotation2, setArrowRotation2] = useState('rotate-0');

  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [arrowRotation3, setArrowRotation3] = useState('rotate-0');

  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
 

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    isDropdownOpen2 ? setIsDropdownOpen2(!isDropdownOpen2):setIsDropdownOpen2(isDropdownOpen2);
    isDropdownOpen2 ? setArrowRotation2(isDropdownOpen2 ? 'rotate-0' : 'rotate-180'):setArrowRotation2(arrowRotation2);
    isDropdownOpen3 ? setIsDropdownOpen3(!isDropdownOpen3):setIsDropdownOpen3(isDropdownOpen3);
    isDropdownOpen3 ? setArrowRotation3(isDropdownOpen3 ? 'rotate-0' : 'rotate-180'):setArrowRotation3(arrowRotation3);
    isDropdownOpen4 ? setIsDropdownOpen4(!isDropdownOpen4):setIsDropdownOpen4(isDropdownOpen4);
    setArrowRotation1(isDropdownOpen1 ? 'rotate-0' : 'rotate-180');
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    isDropdownOpen1 ? setIsDropdownOpen1(!isDropdownOpen1):setIsDropdownOpen1(isDropdownOpen1);
    isDropdownOpen1 ? setArrowRotation1(isDropdownOpen1 ? 'rotate-0' : 'rotate-180'):setArrowRotation1(arrowRotation1);
    isDropdownOpen3 ? setIsDropdownOpen3(!isDropdownOpen3):setIsDropdownOpen3(isDropdownOpen3);
    isDropdownOpen3 ? setArrowRotation3(isDropdownOpen3 ? 'rotate-0' : 'rotate-180'):setArrowRotation2(arrowRotation2);
    isDropdownOpen4 ? setIsDropdownOpen4(!isDropdownOpen4):setIsDropdownOpen4(isDropdownOpen4);

    setArrowRotation2(isDropdownOpen2 ? 'rotate-0' : 'rotate-180');
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    isDropdownOpen1 ? setIsDropdownOpen1(!isDropdownOpen1):setIsDropdownOpen1(isDropdownOpen1);
    isDropdownOpen1 ? setArrowRotation1(isDropdownOpen1 ? 'rotate-0' : 'rotate-180'):setArrowRotation1(arrowRotation1);
    isDropdownOpen2 ? setIsDropdownOpen2(!isDropdownOpen2):setIsDropdownOpen2(isDropdownOpen2);
    isDropdownOpen2 ? setArrowRotation2(isDropdownOpen2 ? 'rotate-0' : 'rotate-180'):setArrowRotation2(arrowRotation2);
    isDropdownOpen4 ? setIsDropdownOpen4(!isDropdownOpen4):setIsDropdownOpen4(isDropdownOpen4);
    setArrowRotation3(isDropdownOpen3 ? 'rotate-0' : 'rotate-180');
  };

  
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    isDropdownOpen1 ? setIsDropdownOpen1(!isDropdownOpen1):setIsDropdownOpen1(isDropdownOpen1);
    isDropdownOpen1 ? setArrowRotation1(isDropdownOpen1 ? 'rotate-0' : 'rotate-180'):setArrowRotation1(arrowRotation1);
    isDropdownOpen2 ? setIsDropdownOpen2(!isDropdownOpen2):setIsDropdownOpen2(isDropdownOpen2);
    isDropdownOpen2 ? setArrowRotation2(isDropdownOpen2 ? 'rotate-0' : 'rotate-180'):setArrowRotation2(arrowRotation2);
    isDropdownOpen3 ? setIsDropdownOpen3(!isDropdownOpen3):setIsDropdownOpen3(isDropdownOpen3);
    
    isDropdownOpen3 ? setArrowRotation3(isDropdownOpen3 ? 'rotate-0' : 'rotate-180'):setArrowRotation2(arrowRotation2);

  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <nav className=" ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink flex flex-row">
              <span className="text-black lg:text-3xl max-lg:text-xl font-bold">Fibery</span>
              <img className='removebg w-5 h-5 ' src="Images/leaf.jpeg" alt="" />
              <h5 className='black-ops text-xs text-green-500'>+AI Now!</h5>
            </div>
            <div className="hidden md:block">
              <div className="lg:ml-10 ml-2 flex items-baseline space-x-4">


                {/* ==============Solution dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown1} type="button" className="text-black hover:bg-gray-500 hover:text-white px-1 py-1 rounded-md text-sm font-medium focus:outline-none flex items-center">
        Solutions
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation1} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen1 && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Solution dropdown menu============================== */}


{/* ==============Product dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown2} type="button" className="text-black hover:bg-gray-500 hover:text-white px-1 py-1 rounded-md text-sm font-medium focus:outline-none flex items-center">
        Product
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation2} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen2 && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Product dropdown menu============================== */}




{/* ==============Resources dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown3} type="button" className="text-black hover:bg-gray-500 hover:text-white px-1 py-1 rounded-md text-sm font-medium focus:outline-none flex items-center">
        Resources
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation3} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen3 && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Resources dropdown menu============================== */}



                <a href="/" className="text-black hover:bg-gray-500 hover:text-white px-1 py-1 rounded-md text-sm font-medium">Pricing</a>


{/* ==============extra dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown4} type="button" className="text-black hover:bg-gray-500 hover:text-white px-1 py-1 rounded-md text-sm font-medium focus:outline-none flex items-center">
       ...
        
      </button>
      
      {isDropdownOpen4 && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============extra dropdown menu============================== */}

              </div>
            </div>
          </div>
          
        </div>
        <div className="mr-1 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-800 h-14 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-8 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        <div className='flex justify-center items-center max-md:hidden ml-4'>
          <button className='font-bold lg:w-16 lg:h-8 w-12 h-6  max-md:text-xs'>Log in</button>
          <button className='lg:ml-8 ml-4 border-2 border-black lg:w-28 lg:h-10 w-24 h-8 text-black font-medium max-md:text-xs hover:bg-slate-400'>Get a demo</button>
          <button className='bg-slate-800 text-white font-semibold lg:w-24 lg:h-10 w-20 h-8 rounded lg:ml-8 ml-2  max-md:text-xs'>Sign up</button>
        </div>
        
      </div>














{/* ==============================================mobile screen=============================== */}



      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">


                {/* ==============Solution dropdown menu============================== */}
                <div className="relative">
      <button onClick={toggleDropdown1} type="button" className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center justify-between w-full">
        Solutions
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation1} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen1 && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Solution dropdown menu============================== */}


{/* ==============Product dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown2} type="button" className="text-black justify-between w-full hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
        Product
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation2} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen2 && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Product dropdown menu============================== */}




{/* ==============Resources dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown3} type="button" className="text-black justify-between w-full hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
        Resources
        <svg className={`ml-1 h-5 w-5 transform ${arrowRotation3} duration-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 13.94l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isDropdownOpen3 && (
        <div className="origin-top-right absolute right-0 mt-2 z-10 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============Resources dropdown menu============================== */}



                <a href="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>


{/* ==============extra dropdown menu============================== */}
<div className="relative">
      <button onClick={toggleDropdown4} type="button" className="text-black justify-between w-full hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
       ...
        
      </button>
      
      {isDropdownOpen4 && (
        <div className="origin-top-right absolute right-0 mt-2 z-10 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          </div>
        </div>
      )}
</div>

{/* ==============extra dropdown menu============================== */}

          </div>
          <div className='flex justify-around items-center lg:hidden ml-4'>
          <button className='font-bold lg:w-16 mb-2 lg:h-8 w-12 h-6 max-md:text-xs '>Log in</button>
          <button className='lg:ml-8 ml-4 border-2 mb-2 border-black lg:w-28 lg:h-10 w-24 h-8 hover:bg-slate-400 text-black font-medium max-md:text-xs'>Get a demo</button>
          <button className='bg-slate-800 text-white mb-2 font-semibold lg:w-24 lg:h-10 w-20 h-8 rounded lg:ml-8 ml-2  max-md:text-xs'>Sign up</button>
        </div>
        </div>
      )}
    </nav>
  );
}




export default Navbar