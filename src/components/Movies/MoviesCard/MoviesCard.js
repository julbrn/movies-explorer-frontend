import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export const MoviesCard = ({ movieInfo }) => {
  const location = useLocation();
  const isLocationSaved = location.pathname.includes('saved');
  return (
    <li className="card">
      <figure className="card__container">
        <figcaption className="card__caption">
          <p className="card__title">{movieInfo.title}</p>
          <p className="card__duration">{movieInfo.duration}</p>
        </figcaption>
        <img className="card__img" src={movieInfo.img} alt={movieInfo.title} />
        <button className={isLocationSaved ? "card__btn card__btn_saved" : `card__btn  ${movieInfo.saved ? "card__btn_active" : ""}`} aria-label="Избранное"></button>
      </figure>
    </li>
  );

}