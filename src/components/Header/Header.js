import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';

export const Header = ({ children }) => {
  return (
    <header className="header">
      <Link to="/" aria-label="На главную">
        <img className="logo" src={logo} alt="Лого BeatFilm" />
      </Link>
      {children}
    </header>
  )
};

export default Header;