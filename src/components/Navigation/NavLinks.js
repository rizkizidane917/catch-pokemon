import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Button from '../../element/button/index';
const NavLinks = () => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center z-2 relative'>
        <Link to='/' className='text-2l text-white font-extrabold'>
          <img src={Logo} style={{ width: '103px', height: '38px' }} />
        </Link>

        <Button isLarge type='link' href='/my-list'>
          My-Pokemon
        </Button>
        {/* <Link
          to='/my-list'
          className='text-gray-100  hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 dark:border-gray-700 dark:bg-gray-800   dark:hover:bg-gray-700 shadow-5xl border border-r-0 border-b-0 border-opacity-30'
        >
          My-Pokemon
        </Link> */}
      </div>
    </div>
  );
};

export default NavLinks;
