import React from 'react';
import Text from '../../../element/text/index';

const About = ({ pokemons = [] }) => {
  return (
    <>
      {pokemons &&
        pokemons?.map((row) => {
          return (
            <div className='w-full'>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary>Types </Text>
                {row.pokemon_v2_pokemontypes.map((row) => {
                  return <Text textSecondary>{row.pokemon_v2_type.name}</Text>;
                })}
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary>Height </Text>
                <Text textSecondary>{row.height} (m)</Text>
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary>Weight </Text>
                <Text textSecondary>{row.weight} (kg)</Text>
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary>Experience </Text>
                <Text textSecondary>{row.base_experience} (exp)</Text>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default About;
