import React, { useState, useContext } from 'react';
import { imageUrl } from '../../graphql/index';
import { pokemonContext } from '../../context/DataContext';

import Delete from '../../assets/remove.png';
import NavLinks from '../Navigation/NavLinks';
import Text from '../../element/text/index';
import Button from '../../element/button';
const MyList = () => {
  const { name, setName } = useContext(pokemonContext);

  function deleteHandler(id) {
    const data = name.filter((rows) => rows.nickId !== id);
    setName(data);
  }

  return (
    <div>
      <NavLinks />
      <div className='fixed top-22 -left-14 w-72 h-72 bg-blue-200 rounded-full  mix-blend-overlay filter  blur-2xl '></div>
      <div className=' fixed z-0  w-72 h-72 bg-yellow-500 rounded-full top-[40em] left-60 filter blur-3xl mix-blend-soft-light  '></div>
      <Text textPrimary className='text-center mt-10'>
        My Pokemon List
      </Text>
      <div className='h-screen'>
        {name.length > 0 ? (
          name &&
          name.map((row) => {
            const name = row.nickName;
            const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            return (
              <div>
                <ul
                  to={`/pokemon/${row.id}`}
                  key={row.id}
                  className='flex flex-row items-center max-w-xl bg-white bg-opacity-10 relative z-2 rounded-3xl shadow-5xl border border-r-0 border-b-0 border-opacity-30  backdrop-filter backdrop-blur-sm my-7 hover:bg-opacity-20 hover:-translate-y-3 ease-in-out duration-200'
                >
                  <button onClick={() => deleteHandler(row.nickId)}>
                    <img src={Delete} className='w-[25px] relative bottom-14 z-10 ' />
                  </button>
                  <div className='flex flex-col justify-between p-5 leading-normal'>
                    <Text textSecondary>#00{row.id}</Text>
                    <Text textPrimary>{row.name}</Text>
                    <Text textSecondary>{nameCapitalized}</Text>
                  </div>
                  <img src={imageUrl(row.id)} style={{ width: '120px' }} className='w-full mx-auto' />
                </ul>
              </div>
            );
          })
        ) : (
          <div className='flex text-center h-screen pb-14 '>
            <div className='m-auto'>
              <Text textSecondary>- No Pokemon List -</Text>
              <Button type='link' href='/' isSmall>
                Catch The Pokemons Here....
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
