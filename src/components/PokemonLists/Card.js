import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../../graphql/index';
import { pokemonContext } from '../../context/DataContext';

import Text from '../../element/text/index';

const Card = (props) => {
  const { pokemons } = props;

  const pokemonData = pokemons?.map((row) => ({
    id: row.id,
    name: row.name,
  }));
  return (
    <div>
      {pokemonData &&
        pokemonData?.map((row) => {
          // Uppercase first word
          const name = row.name;
          const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <Link
              to={`/pokemon/${row.id}`}
              key={row.id}
              className='flex flex-row items-center max-w-xl bg-white bg-opacity-10 relative z-2 rounded-3xl shadow-5xl border border-r-0 border-b-0 border-opacity-30  backdrop-filter backdrop-blur-sm my-7 hover:bg-opacity-20 hover:-translate-y-3 ease-in-out duration-200'
            >
              <div className='flex flex-col justify-between p-5 leading-normal'>
                <Text textSecondary>#00{row.id}</Text>
                <Text textPrimary>{nameCapitalized}</Text>
              </div>
              <img className='w-full mx-auto' src={imageUrl(row.id)} style={{ width: '136px' }} />
            </Link>
          );
        })}
    </div>
  );
};

export default Card;
