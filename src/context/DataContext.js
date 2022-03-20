import React, { createContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// create Context
export const pokemonContext = createContext();

const DataContext = ({ children }) => {
  const [nickName, setNickName] = useState('');
  const [name, setName] = useState([]);
  const [myPokemon, setMyPokemon] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const history = useHistory();
  // Get From Local Storage
  useEffect(() => {
    const dataStore = JSON.parse(localStorage.getItem('name'));
    if (dataStore) setName(dataStore);
  }, []);
  // useEffect(() => {
  //   const dataStore = JSON.parse(localStorage.getItem('pokemon'));
  //   if (dataStore) setMyPokemon(dataStore);
  // }, []);
  // // Save To Local Storage
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  // useEffect(() => {
  //   localStorage.setItem('pokemon', JSON.stringify(myPokemon));
  // }, [myPokemon]);

  // Add items My-List
  const addItemsHandler = (pokemon) => {
    const nextId = name.length > 0 ? Math.max(...name.map((t) => t.id)) + 1 : 0;
    let names = {
      id: pokemon.id,
      name: pokemon.name,
      nickId: nextId,
      nickName,
    };
    setName([...name, names]);
    setNickName('');
    setOpenForm(false);
    console.log(names);
  };
  // Delete Items My-List
  // function deleteHandler(id) {
  //   const dataName = name.filter((row) => row.id !== id);
  //   // const data = localStorage.removeItem('name', JSON.stringify(dataName));
  //   setName(data);
  // }

  return (
    <pokemonContext.Provider
      value={{
        nickName,
        setNickName,
        name,
        setName,
        openForm,
        myPokemon,
        setMyPokemon,
        setOpenForm,
        // deleteHandler,
        addItemsHandler,
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
  // return <pokemonContext.Provider value={{ name: state.name, pokemonData: state.pokemonData, addNameToMyPokemonList }}>{children}</pokemonContext.Provider>;
};

export default DataContext;
