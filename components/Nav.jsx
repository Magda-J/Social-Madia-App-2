"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {


  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleMouseEnter = (e) => {
    e.target.style.color = '#3b82f6';
    e.target.style.transitionDuration = '300ms'
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '';
  };

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
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='text-black  font-bold rounded-lg uppercase text-sm px-2 py-2.5 text-center me-2 mb-2' href='/'>Home</button>
          </Link>


          <Link href='/add'>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} className='text-black  font-bold rounded-lg uppercase text-sm px-2 py-2.5 text-center me-2 mb-2' href='/add'>Add Post</button>
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
            onClick={() => setToggleDropdown((prev) => !prev)}

          />

          {toggleDropdown && (
            <div className='dropdown flex flex-col gap-5'>

              <Link href='/'
                className='dropdown_link'
                onClick={() => setToggleDropdown
                  (false)}
              >
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  Home
                </button>
              </Link>
              <Link href='/add'
                className='dropdown_link'
                onClick={() => setToggleDropdown
                  (false)}
              >
                Add Post
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