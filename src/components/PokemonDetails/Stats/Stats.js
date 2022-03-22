import React from 'react';
import Text from '../../../element/text';

const Stats = ({ pokemons = [] }) => {
  return (
    <div>
      {pokemons &&
        pokemons?.map((row) => {
          return (
            <div className='w-full mt-5'>
              {row.pokemon_v2_pokemonstats.map((row) => {
                return (
                  <div className='grid grid-rows-1 grid-cols-3 gap-2 mb-5 lg:mb-3'>
                    <Text textSecondary className='font-bold'>
                      {row.pokemon_v2_stat.name}
                    </Text>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Stats;
