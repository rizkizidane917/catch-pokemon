import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { pokemonContext } from '../../context/DataContext';

import Logo from '../../assets/logo.png';
import Button from '../../element/button/index';
const NavLinks = () => {
  const { name } = useContext(pokemonContext);
  return (
    <div>
      <div className='flex flex-row justify-between items-center z-2 relative'>
        <Link to='/' className='text-2l text-white font-extrabold'>
          <img src={Logo} style={{ width: '103px', height: '38px' }} />
        </Link>

        <Button isLarge type='link' href='/my-list'>
          {name.length} Owned
        </Button>
      </div>
    </div>
  );
};

export default NavLinks;
