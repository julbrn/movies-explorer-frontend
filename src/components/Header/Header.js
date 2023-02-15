import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" aria-label="На главную">
        <img className="logo" src={logo} alt="Лого BeatFilm" />
      </Link>
      <Switch>
        <Route exact path="/">
          <ul className='header__links'>
            <Link
              to="/signup"
              className='link link_type_signup'>Регистрация</Link>
            <Link
              to="/signin"
              className='link link_type_signin'>Войти</Link>
          </ul>
        </Route>
        <Route path={["/profile", "/movies", "/saved-movies"]}>
          <Navigation />
        </Route>
      </Switch>
    </header>
  )
};

export default Header;