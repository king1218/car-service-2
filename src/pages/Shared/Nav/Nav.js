import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)
    return (
      <div className='conainer top-0 sticky mx-auto h-[60px] z-50 bg-white  drop-shadow-lg'>
      <div className='px-4  flex lg:justify-between justify-between items-center w-full h-full'>
        <div className='flex items-center md:justify-between  '>
          <Link to='/'><img src="https://i.ibb.co/PNJ4MXk/images-6-removebg-preview.png" className='lg:h-20 lg:w-20 h-6 w-6 ' alt="" /></Link> 
        <Link to='/' className="cursor-pointer text-xl md:text-2xl lg:text-2xl f">Car <span className="text-blue-700 blur-3">Service</span> </Link> 
          <ul className='hidden  lg:flex ml-10 '>
              <li><Link to='/' className=" hover:text-blue-700  ">Home</Link></li>
               <li><Link to='/services' className="hover:text-blue-700  md:ml-4">Services</Link></li>
               <li><Link to='/exparts' className="hover:text-blue-700 md:ml-4  ">Exparts</Link></li>
               <li><Link to='/about' className="hover:text-blue-700 md:ml-4 "> About</Link></li>
          </ul>
        </div>
        <div className='hidden lg:flex  '>
          <Link to='/login' className="hover:text-blue-700 mt-2 mr-2">
            Log In
          </Link>
          <Link className=" transition text-white ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-blue-500 duration-300 px-4 py-2 rounded" to='/register'>Register</Link>
        </div>
        <div className='lg:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300' /> : <XIcon className='w-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 transform duration-300 '}>
               <li><Link to='/' className="hover:text-blue-700 ">Home</Link></li>
               <li><Link to='/services' className="hover:text-blue-700  md:ml-4">Services</Link></li>
               <li><Link to='/exparts' className="hover:text-blue-700 md:ml-4  ">Exparts</Link></li>
               <li><Link to='/about' className="hover:text-blue-700 md:ml-4 "> About</Link></li>
              
        
        <div className='flex  my-4'>
              <li> <Link to='login' className="hover:text-blue-700  ">Login</Link></li>
               <li> <Link to='signup' className="duration-300   bg-blue-700 px-2 py-2  rounded-md text-white text-sm ml-2  hover:bg-blue-600 transition-all">Sign Up</Link></li>
        </div>
      </ul>
    </div>
    );
};

export default Nav;