import './Navigation.css';
import { NavLink, useLocation, Link } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const isLocationAuthorized = location.pathname.includes('movies' || 'profile');
  const isBurger = false;
  return (
    <nav className="nav">
      <ul className="nav__items">
        {isLocationAuthorized ?? (
          <>
            {isBurger && (
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/">Главная
              </NavLink>
            )}
            <li className="nav__movie-item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/movies">Фильмы
              </NavLink>
            </li>
            <li className="nav__movie-item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/saved-movies">Сохранённые фильмы
              </NavLink>
            </li>
          </>
        )}

      </ul>
      <ul className="navigation-links navigation-links_type_profile">
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
              <button className="nav__profile-icon" />
            </NavLink>
          </li>
        )}
      </ul>
    </nav >

  )
}