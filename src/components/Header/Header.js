import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export const Header = ({ onClickBurger, isBurgerMenuOpened, handleBurgerLinkClick, isLoggedIn }) => {
  const handleLinkClick = () => {
    document.querySelector(".nav_type_sidebar").classList.remove("nav_type_sidebar-active");
    handleBurgerLinkClick();
  }
  return (
    <header className="header">
      <Link to="/" aria-label="На главную">
        <img className="logo" src={logo} alt="Лого BeatFilm" />
      </Link>
      {isLoggedIn && (
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
      <Navigation isBurgerMenuOpened={isBurgerMenuOpened} handleLinkClick={handleLinkClick} isLoggedIn={isLoggedIn} />
    </header>
  )
};

export default Header;