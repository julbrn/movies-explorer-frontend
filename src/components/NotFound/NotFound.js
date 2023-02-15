import {
  Link, useLocation,
} from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  const navigate = useLocation();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <div className='not-found__info'>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не страница</p>
      </div>
      <Link className="link link_color_blue" to={goBack}>
        Назад
      </Link>
    </main>
  );
};