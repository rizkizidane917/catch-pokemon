import React from 'react';
import NavLinks from '../components/Navigation/NavLinks';
import ListPokemon from '../components/PokemonLists/ListPokemon';

const PokemonList = () => {
  return (
    <div className='max-w-sm container mx-auto px-5 py-6  grid grid-cols-1 gap-5 '>
      <div className='fixed top-22 -left-14 w-72 h-72 bg-blue-200 rounded-full  mix-blend-overlay filter  blur-2xl '></div>
      <div className=' fixed z-0  w-72 h-72 bg-yellow-500 rounded-full top-[40em] left-60 filter blur-3xl mix-blend-soft-light  '></div>
      <NavLinks />
      <ListPokemon />
    </div>
  );
};

export default PokemonList;
