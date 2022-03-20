import React from 'react';
import MyList from '../components/myPokemonList/MyList';

const MyPokemonList = () => {
  return (
    <div className='max-w-sm container mx-auto px-5 py-6  grid grid-cols-1 gap-5'>
      <MyList />
    </div>
  );
};

export default MyPokemonList;
