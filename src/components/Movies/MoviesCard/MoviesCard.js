import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { MOVIE_BASE_URL } from '../../../utils/constants';


export const MoviesCard = ({ movieInfo }) => {
  const location = useLocation();
  const isLocationSaved = location.pathname.includes('saved');
  return (
    <li className="card">
      <figure className="card__container">
        <figcaption className="card__caption">
          <p className="card__title">{movieInfo.nameRU}</p>
          <p className="card__duration">{movieInfo.duration}</p>
        </figcaption>
        <img className="card__img" src={movieInfo.image.url ? `${MOVIE_BASE_URL}/${movieInfo.image.url}` : movieInfo.image} alt={movieInfo.nameRU} />
        <button className={isLocationSaved ? "card__btn card__btn_saved" : `card__btn  ${movieInfo.saved ? "card__btn_active" : ""}`} aria-label="Избранное"></button>
      </figure>
    </li>
  );

}