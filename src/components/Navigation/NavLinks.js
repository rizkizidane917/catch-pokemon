import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assert/logo.png';
const NavLinks = () => {
  return (
    <div className=' max-w-sm container mx-auto px-5 py-3  grid grid-cols-1 gap-5 bg-red-500'>
      <div className='flex flex-row justify-between items-center'>
        <Link to='/' className='text-2l text-white font-extrabold'>
          <img src={Logo} style={{ width: '103px', height: '38px' }} />
        </Link>

        <Link to='/my-list' className='text-white  hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 dark:border-gray-700 dark:bg-gray-800   dark:hover:bg-gray-700 '>
          My-Pokemon
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
