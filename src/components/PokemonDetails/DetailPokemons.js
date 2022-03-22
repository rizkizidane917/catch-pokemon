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
import Moves from './Moves/Moves';

import './DetailPokemons.css';
import Stats from './Stats/Stats';
const DetailPokemons = () => {
  const params = useParams();
  const { setOpenForm, setOpenFailForm, myPokemon, deleteHandler } = useContext(pokemonContext);
  const [catchingPokemon, setCatchingPokemon] = useState(null);
  const [toggleClick, setToggleClick] = useState(0);
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
      <div className='bg-white bg-opacity-10 text-white my-10 rounded-lg p-5 h-96'>
        <div className='flex flex-row justify-between items-center rounded-sm py-2 '>
          <div>
            <Button isSmall onClick={() => setToggleClick(0)}>
              About
            </Button>
          </div>
          <div>
            <Button isSmall onClick={() => setToggleClick(1)}>
              Stats
            </Button>
          </div>
          <div>
            <Button isSmall onClick={() => setToggleClick(2)}>
              Moves
            </Button>
          </div>
        </div>
        <div className='pt-3'>
          <div hidden={toggleClick !== 0}>
            <About pokemons={pokemon_v2_pokemon} />
          </div>
          <div hidden={toggleClick !== 1}>
            <Stats pokemons={pokemon_v2_pokemon} />
          </div>
          <div hidden={toggleClick !== 2}>
            <Moves pokemons={pokemon_v2_pokemon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemons;
