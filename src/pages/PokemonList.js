import React from 'react';
import ListPokemon from '../components/PokemonLists/ListPokemon';

const PokemonList = () => {
  return (
    <div className='max-w-sm container mx-auto px-5 py-6  grid grid-cols-1 gap-5 '>
      <ListPokemon />
    </div>
  );
};
// h-40-r w-40-r bg-gradient-to-r from-[#3564AE] rounded-full left-2/3 absolute -top-56

export default PokemonList;
