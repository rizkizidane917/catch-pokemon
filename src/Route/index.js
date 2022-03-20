import MyPokemonList from '../pages/MyPokemonList';
import PokemonDetails from '../pages/PokemonDetails';
import PokemonList from '../pages/PokemonList';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NavLinks from '../components/Navigation/NavLinks';

const Routing = () => {
  return (
    <Router>
      <div className='App bg-gray-900 font-[roboto]  '>
        <NavLinks />
        <Switch>
          <Route path='/' exact>
            <PokemonList />
          </Route>
          <Route path='/pokemon/:id' exact>
            <PokemonDetails />
          </Route>
          <Route path='/my-list' exact>
            <MyPokemonList />
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
