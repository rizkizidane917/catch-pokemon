import React from 'react';
import PokeBall from '../../assets/pokeBall.png';
const Loading = () => {
  return (
    <div className='flex-row items-center justify-center flex h-screen '>
      <img src={PokeBall} className='w-[40px] h-[40px] animate-bounce mr-2' />
      <h1 className='text-2xl font-bold text-white'>Loading....</h1>
    </div>
  );
};

export default Loading;
