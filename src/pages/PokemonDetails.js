import React from 'react';
import DetailPokemons from '../components/PokemonDetails/DetailPokemons';

const PokemonDetails = () => {
  return (
    <div className='max-w-sm container mx-auto px-5 py-6  grid grid-cols-1 gap-5'>
      <DetailPokemons />
    </div>
  );
};

export default PokemonDetails;
