import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../../graphql/index';
const Card = (props) => {
  const { pokemons = [] } = props;

  const pokemonData = pokemons?.map((row) => ({
    id: row.id,
    name: row.name,
  }));
  return (
    <div>
      {pokemonData &&
        pokemonData?.map((row) => {
          return (
            <div key={row.id}>
              <Link to={`/pokemon/${row.id}`} className='flex flex-row items-center bg-white rounded-3xl border shadow-md max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-7 py-2'>
                <div className='flex flex-col justify-between p-5 leading-normal'>
                  <h5 className='mb-2 text-sm font-light tracking-tight text-gray-900 dark:text-white uppercase '>#00{row.id}</h5>
                  <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white uppercase'>{row.name}</h5>
                </div>
                <img className='w-full mx-auto' src={imageUrl(row.id)} style={{ width: '136px' }} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
