import './Navigation.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <span className="nav__utils"></span>
        </li>
        <li className="nav__item">
          <ul className='nav__movie-items'>
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
          </ul>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__profile-btn"
            activeClassName="nav__profile-btn_active"
            to="/profile">
            Аккаунт
            <button className="nav__profile-icon" />
          </NavLink>
        </li>
      </ul >
    </nav >
  );
};