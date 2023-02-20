import './Navigation.css';
import { NavLink, useLocation, Link } from 'react-router-dom';

export const Navigation = ({ isBurgerMenuOpened, handleLinkClick }) => {
  const location = useLocation();
  const isLocationAuthorized = location.pathname.includes('profile') || location.pathname.includes('movies');

  return (
    <nav className={`nav ${isLocationAuthorized ? "nav_type_sidebar" : ""} `}>
      <ul className="nav__links nav__links_type_movies">
        {isLocationAuthorized && (
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
        {!isLocationAuthorized && (
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
        {isLocationAuthorized && (
          <li>
            <NavLink
              className="nav__profile-btn"
              activeClassName="nav__profile-btn_active"
              to="/profile">
              Аккаунт
              <div className='nav__profile-icon'></div>
            </NavLink>
          </li>
        )}
      </ul>
    </nav >

  )
}