"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
 

const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='relative px-4 py-4 flex justify-between items-center'>
      
    <Link href='/' className='flex flex-center ml-4'>
      <Image
        src='/assets/images/logo1.svg'
        width={150}
        height={150}
        alt='logo'
        className='object-contain'
      />
    </Link>
    
     
    <div className='sm:flex hidden mt-2 mr-10'>
      <div className='flex gap-3 md:gap-10'>
      
      <Link href='/'>
      <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href='/'>Home</button>
      </Link>
      
      
      <Link href='/add'>
      <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href='/add'>Add Post</button>
      </Link>
      
      
      <Link href='/'>
      <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href='/'>About</button>
      </Link>
      
      
    </div>
    </div>

{/* {mobile menu} */}  
  
<div className='sm:hidden flex relative'>
  <div className='flex p-4 ml-10'>
 <Image
        src='/assets/images/logo2.svg'
        width={40}
        height={40}
        alt='logo2'
        className='object-contain'
        onClick={() => setToggleDropdown((prev)=>!prev)}
        
      /> 
      
{toggleDropdown && (
  <div className='dropdown flex flex-col gap-5'>
<Link href='/'
className='dropdown_link'
onClick={() => setToggleDropdown
(false)}
>
 Home
 </Link>
 <Link href='/add'
className='dropdown_link'
onClick={() => setToggleDropdown
(false)}
>
 Add Post
 </Link>
 <Link href='/'
className='dropdown_link'
onClick={() => setToggleDropdown
(false)}
>
 About
 </Link>

 </div>
)}

</div>

</div>




{/* {mobile menu} */}
  </nav>
  )
}
export default Nav