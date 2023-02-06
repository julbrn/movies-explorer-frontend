import './Navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
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
      </ul>
    </nav >
  );
};