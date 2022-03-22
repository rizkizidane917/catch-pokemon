import React, { useState, useContext } from 'react';
import { imageUrl } from '../../graphql/index';
import { pokemonContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';

import Delete from '../../assets/remove.png';
import NavLinks from '../Navigation/NavLinks';
import Text from '../../element/text/index';
const MyList = () => {
  const { name, setName } = useContext(pokemonContext);
  function deleteHandler(id) {
    // const data = name.filter((row) => console.log(row.id));
    // // const data = localStorage.removeItem('name', JSON.stringify(dataName));
    // console.log(data);
    // // setName(data);
    console.log('delete');
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
            <ul
              to={`/pokemon/${row.id}`}
              key={row.id}
              className='flex flex-row items-center max-w-xl bg-white bg-opacity-10 relative z-2 rounded-3xl shadow-5xl border border-r-0 border-b-0 border-opacity-30  backdrop-filter backdrop-blur-sm my-7 hover:bg-opacity-20 hover:-translate-y-3 ease-in-out duration-200'
            >
              <button onClick={deleteHandler}>
                <img src={Delete} className='w-[25px] relative bottom-14 z-10 ' />
              </button>
              <div className='flex flex-col justify-between p-5 leading-normal'>
                <Text textSecondary>#00{row.id}</Text>
                <Text textPrimary>{row.name}</Text>
                <Text textSecondary>{row.nickName}</Text>
              </div>
              <img src={imageUrl(row.id)} style={{ width: '120px' }} className='w-full mx-auto' />
            </ul>
          );
        })}
    </div>
  );
};

export default MyList;
