import React, { useContext, useState } from 'react';
import { GET_POKEMON_BY_ID, imageUrl } from '../../graphql/index';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { pokemonContext } from '../../context/DataContext';
import Modal from './Modal';
const DetailPokemons = () => {
  const params = useParams();
  const { setOpenForm, myPokemon, deleteHandler } = useContext(pokemonContext);
  const [catchingPokemon, setCatchingPokemon] = useState(null);
  const {
    loading,
    error,
    data: { pokemon_v2_pokemon = [] } = {},
  } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: params.id },
  });
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  const handleClick = () => {
    setCatchingPokemon(Math.random() < 0.5);
    if (catchingPokemon === true) {
      setOpenForm(true);
      console.log('Succes');
    } else {
      console.log('false');
    }
  };
  return (
    <div>
      <Modal setOpenForm={setOpenForm} pokemons={pokemon_v2_pokemon} />
      {pokemon_v2_pokemon &&
        pokemon_v2_pokemon?.map((row) => {
          return (
            <div key={row.id}>
              <h1>{row.id}</h1>
              <h1>{row.name}</h1>
              <img src={imageUrl(row.id)} style={{ width: '200px', height: '200px' }} />
            </div>
          );
        })}
      <button onClick={handleClick}>Catch</button>
    </div>
  );
};

export default DetailPokemons;
