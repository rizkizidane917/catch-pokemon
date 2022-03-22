import React from 'react';

import Text from '../../../element/text/index';

import './header.css';
const Header = (props) => {
  const { pokemons, url } = props;

  const processedData = pokemons?.map((row) => ({
    id: row.id,
    name: row.name,
  }));
  return (
    <>
      {processedData &&
        processedData?.map((row) => {
          // Uppercase first word
          const name = row.name;
          const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
          return (
            <div key={row.id} className='text-white relative z-2'>
              <Text textSecondary style={{ fontSize: '16px' }}>
                #00{row.id}
              </Text>
              <Text textPrimary className='tracking-widest'>
                {nameCapitalized}
              </Text>
              <div className='overlays'></div>
              <img src={url(row.id)} className='mx-auto my-10 relative ' style={{ width: '200px', height: '200px' }} />
            </div>
          );
        })}
    </>
  );
};

export default Header;
