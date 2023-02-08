import './MoviesCard.css';
import { Link } from 'react-router-dom';

export const MoviesCard = ({ movieInfo }) => (
  <li className="card">
    <figure className="card__container">
      <figcaption className="card__caption">
        <p className="card__title">{movieInfo.title}</p>
        <p className="card__duration">{movieInfo.duration}</p>
      </figcaption>
      <img className="card__img" src={movieInfo.img} alt={movieInfo.title} />
      <button className={`card__saved ${movieInfo.saved ? "card__saved_active" : ""}`}></button>
    </figure>
  </li>
);