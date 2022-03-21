import React, { useContext, useState } from 'react';
import { GET_POKEMON_BY_ID, imageUrl } from '../../graphql/index';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { pokemonContext } from '../../context/DataContext';
import Modal from './Modal';
import Loading from '../../element/loading';
import Header from './Header';
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
  if (loading) return <Loading />;
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
    <>
      <Modal setOpenForm={setOpenForm} pokemons={pokemon_v2_pokemon} />
      <div className='text-center'>
        <Header pokemons={pokemon_v2_pokemon} url={imageUrl} />

        <button onClick={handleClick} className='text-white'>
          Catch
        </button>
      </div>
    </>
  );
};

export default DetailPokemons;
