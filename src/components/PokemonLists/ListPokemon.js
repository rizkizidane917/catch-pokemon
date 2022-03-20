import React, { useState } from 'react';
import { GET_POKEMON_LIST } from '../../graphql/index';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Card from './Card';

const ListPokemon = () => {
  const params = useParams();
  // const [pokemod, setPokemod] = useState(pokemon_v2_pokemon);
  const {
    loading,
    error,
    data: { pokemon_v2_pokemon = [] } = {},
  } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 20, id: params.id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <Card pokemons={pokemon_v2_pokemon} />
    </div>
  );
};

export default ListPokemon;
