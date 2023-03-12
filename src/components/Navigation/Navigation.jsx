import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

export const Navigation = ({ isBurgerMenuOpened, handleLinkClick, isLoggedIn }) => {

  return (
    <nav className={`nav ${isLoggedIn ? "nav_type_sidebar" : ""} `}>
      <ul className="nav__links nav__links_type_movies">
        {isLoggedIn && (
          <>
            {isBurgerMenuOpened && (
              <>
                <li>
                  <NavLink
                    className="nav__link"
                    onClick={handleLinkClick}
                    activeClassName="nav__link_active"
                    exact to="/">Главная
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav__movie-item">
              <NavLink
                className="nav__link"
                onClick={handleLinkClick}
                activeClassName="nav__link_active"
                to="/movies">Фильмы
              </NavLink>
            </li>
            <li className="nav__movie-item">
              <NavLink
                className="nav__link"
                onClick={handleLinkClick}
                activeClassName="nav__link_active"
                to="/saved-movies">Сохранённые фильмы
              </NavLink>
            </li>
          </>
        )}

      </ul>
      <ul className="nav__links nav__links_type_profile">
        {!isLoggedIn && (
          <>
            <li>
              <Link
                to="/signup"
                className='link link_type_signup'>Регистрация</Link>
            </li>
            <li>
              <Link
                to="/signin"
                className='link link_type_signin'>Войти</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <NavLink
              className="nav__profile-btn"
              activeClassName="nav__profile-btn_active"
              to="/profile"
              onClick={handleLinkClick}>
              Аккаунт
              <div className='nav__profile-icon'></div>
            </NavLink>
          </li>
        )}
      </ul>
    </nav >

  )
}