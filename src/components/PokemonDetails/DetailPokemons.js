import React, { useContext, useState } from 'react';
import { GET_POKEMON_BY_ID, imageUrl } from '../../graphql/index';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { pokemonContext } from '../../context/DataContext';

import PokeBall from '../../assets/pokeBall.png';
import Button from '../../element/button/index';
import Modal from './Modal';
import Loading from '../../element/loading';
import Header from './Header';
import ModalFail from './Modal/ModalFail';
import About from './About/About';
const DetailPokemons = () => {
  const params = useParams();
  const { setOpenForm, setOpenFailForm, myPokemon, deleteHandler } = useContext(pokemonContext);
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
      setOpenFailForm(true);
      console.log('Fail');
    }
  };
  return (
    <>
      <Modal pokemons={pokemon_v2_pokemon} />
      <ModalFail />
      <div className='text-center'>
        <Header pokemons={pokemon_v2_pokemon} url={imageUrl} />
        <Button onClick={handleClick} isLarge>
          <div className='flex flex-row text-md font-normal'>
            <img src={PokeBall} className='w-[20px] mr-2 animate-bounce' />
            Catch Pokemon
          </div>
        </Button>
      </div>
      <div className='bg-white bg-opacity-10 text-white my-10 rounded-lg p-5'>
        <div className='flex flex-row justify-between items-center  bg-red-500 rounded-sm py-2 '>
          <h1>About</h1>
          <h1>Stat</h1>
          <h1>Moves</h1>
        </div>
        <About pokemons={pokemon_v2_pokemon} />
      </div>
    </>
  );
};

export default DetailPokemons;
