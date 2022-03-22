import React from 'react';

import Text from '../../../element/text/index';
const Moves = ({ pokemons = [] }) => {
  return (
    <>
      {pokemons &&
        pokemons?.map((row) => {
          return (
            <div className='w-full mt-5'>
              <div className='grid grid-rows-1 grid-cols-2 gap-3 mb-5 lg:mb-3'>
                {row.pokemon_v2_pokemonmoves.map((moves, i) => {
                  if (i >= 8) {
                    return null;
                  } else {
                    return (
                      <div className='border border-dashed py-2 hover:border-yellow-400 cursor-pointer'>
                        <Text textSecondary className='text-center pt-2 '>
                          {moves.pokemon_v2_move.name}
                        </Text>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Moves;
