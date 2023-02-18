import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Movies } from '../Movies/Movies';
import { Header } from '../Header/Header';
import { SavedMovies } from '../Movies/SavedMovies/SavedMovies';
import './App.css';

export const App = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  function handleBurgerLinkClick() {
    setIsBurgerMenuOpened(false);
  }
  function onBurgerClick() {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
    document.querySelector(".nav_type_sidebar").classList.toggle("nav_type_sidebar-active");
  }
  return (
    <>
      <Switch>
        <Route exact path="/" >
          <Header isBurgerMenuOpened={isBurgerMenuOpened} />
          <Main />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/movies">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} handleBurgerLinkClick={handleBurgerLinkClick} />
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} handleBurgerLinkClick={handleBurgerLinkClick} />
          <SavedMovies />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} handleBurgerLinkClick={handleBurgerLinkClick} />
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default App;