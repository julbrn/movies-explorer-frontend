import React from 'react';
import { Link } from "react-router-dom";
//import Navigation from "../Navigation/Navigation.js";
import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link" aria-label="На главную">
        <img className="header__logo-logo-img" src={logo} alt="Лого BeatFilm" />
      </Link>
    </header>
  )
};

export default Header;