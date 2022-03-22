import React from 'react';
import Text from '../../../element/text/index';

const About = ({ pokemons = [] }) => {
  return (
    <>
      {pokemons &&
        pokemons?.map((row) => {
          return (
            <div className='w-full mt-5'>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary className='font-[400]'>
                  Types{' '}
                </Text>
                {row.pokemon_v2_pokemontypes.map((row) => {
                  return (
                    <div key={row.id}>
                      <Text textSecondary className='font-bold dark:bg-gray-700  px-3 rounded-md mr-3 text-center '>
                        {row.pokemon_v2_type.name}
                      </Text>
                    </div>
                  );
                })}
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary className='font-[400]'>
                  Height{' '}
                </Text>

                <Text textSecondary>{row.height} (m)</Text>
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary className='font-[400]'>
                  Weight{' '}
                </Text>
                <Text textSecondary>{row.weight} (kg)</Text>
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary className='font-[400]'>
                  Abilities{' '}
                </Text>
                {row.pokemon_v2_pokemonabilities.map((row, i) => {
                  if (i >= 2) {
                    return null;
                  } else {
                    return (
                      <Text textSecondary className=' font-bold '>
                        {row.pokemon_v2_ability.name}
                      </Text>
                    );
                  }
                })}
              </div>
              <div className='grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3'>
                <Text textSecondary className='font-[400]'>
                  Experience{' '}
                </Text>
                <Text textSecondary>{row.base_experience} (exp)</Text>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default About;
