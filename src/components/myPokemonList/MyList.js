import React, { useState, useContext } from 'react';
import { imageUrl } from '../../graphql/index';
import { pokemonContext } from '../../context/DataContext';

import NavLinks from '../Navigation/NavLinks';
import Text from '../../element/text/index';
const MyList = () => {
  const { name, setName } = useContext(pokemonContext);
  function deleteHandler(id) {
    const data = name.filter((row) => console.log(row.id));
    // const data = localStorage.removeItem('name', JSON.stringify(dataName));
    console.log(data);
    // setName(data);
  }
  return (
    <div className='h-screen'>
      <NavLinks />
      <Text textPrimary className='text-center mt-10'>
        My Pokemon List
      </Text>
      {name &&
        name.map((row) => {
          return (
            <ul key={row.id} className='flex flex-row items-center bg-white rounded-lg border shadow-md max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-5'>
              <div className='flex flex-col justify-between p-5 leading-normal'>
                <li className='mb-2 text-lg font-light tracking-tight text-gray-900 dark:text-white uppercase'>#00{row.id}</li>
                <li className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase'>{row.name}</li>
                <li className='mb-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white uppercase'>{row.nickName}</li>
              </div>
              <li>
                <img src={imageUrl(row.id)} style={{ width: '120px' }} />
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default MyList;
