import React from 'react';
import Text from '../../../element/text';

const Stats = ({ pokemons = [] }) => {
  return (
    <div>
      {pokemons &&
        pokemons?.map((row) => {
          return (
            <div className='w-full '>
              {row.pokemon_v2_pokemonstats.map((row) => {
                return (
                  <div className='mb-5 lg:mb-3'>
                    <div className='flex items-center justify-between mb-1'>
                      <div className='flex items-center'>
                        <Text textSecondary>{row.pokemon_v2_stat.name}</Text>
                      </div>
                      <Text textSecondary>{row.base_stat}%</Text>
                    </div>

                    <div className='w-full bg-gray-200 h-1 mb-6'>
                      <div className='bg-yellow-400 h-1' style={{ width: `${row.base_stat}%` }}></div>
                    </div>
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
