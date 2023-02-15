import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Preloader } from '../Preloader/Preloader';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../Movies/SavedMovies/SavedMovies';
import './App.css';

export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default App;