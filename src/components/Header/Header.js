import React from 'react';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export const Header = ({ onClickBurger, isBurgerMenuOpened }) => {
  const location = useLocation();
  const isLocationAuthorized = location.pathname.includes('movies' || 'profile');
  const [isClickedBurger, setIsClickedBurger] = useState(false);
  return (
    <header className="header">
      <Link to="/" aria-label="На главную">
        <img className="logo" src={logo} alt="Лого BeatFilm" />
      </Link>
      {isLocationAuthorized && (
        <button
          className="burger"
          type="button"
          aria-label="Открыть меню"
          onClick={onClickBurger}
        >
          <span className={`${isBurgerMenuOpened ? 'burger__bar' +
            ' burger__bar_cross' : 'burger__bar'}`}></span>
          <span className={`${isBurgerMenuOpened ? 'burger__bar' +
            ' burger__bar_cross' : 'burger__bar'}`}></span>
          <span className={`${isBurgerMenuOpened ? 'burger__bar' +
            ' burger__bar_cross' : 'burger__bar'}`}></span>
        </button>
      )}
      <Navigation />
    </header>
  )
};

export default Header;