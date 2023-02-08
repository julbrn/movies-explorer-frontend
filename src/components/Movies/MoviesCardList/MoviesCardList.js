import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import movies from '../../../utils/movies.json';

export const MoviesCardList = () => (
  <div className='movies__wrapper'>
    <ul className="movies__list">
      {movies.movies.map(movieInfo => {
        return <MoviesCard movieInfo={movieInfo} key={movieInfo._id} />
      })}
    </ul>
    <button type="button" className="movies__btn">Ещё</button>
  </div>
);