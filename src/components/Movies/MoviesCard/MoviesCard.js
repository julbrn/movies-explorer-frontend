import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { MOVIE_BASE_URL } from '../../../utils/constants';


export const MoviesCard = ({ movieInfo }) => {
  const location = useLocation();
  const isLocationSaved = location.pathname.includes('saved');
  const movieDuration = `${Math.floor(movieInfo.duration / 60)}ч ${movieInfo.duration % 60}м`;
  return (
    <li className="card">
      <figure className="card__container">
        <figcaption className="card__caption">
          <p className="card__title">{movieInfo.nameRU}</p>
          <p className="card__duration">{movieDuration}</p>
        </figcaption>
        <a href={movieInfo.trailerLink}
          target="_blank">
          <img className="card__img" src={movieInfo.image.url ? `${MOVIE_BASE_URL}/${movieInfo.image.url}` : movieInfo.image} alt={movieInfo.nameRU} />
        </a>
        <button className={isLocationSaved ? "card__btn card__btn_saved" : `card__btn  ${movieInfo.saved ? "card__btn_active" : ""}`} aria-label="Избранное"></button>
      </figure>
    </li>
  );

}