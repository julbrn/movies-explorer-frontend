import '../MoviesCardList/MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import movies from '../../../utils/movies.json';

export const SavedMoviesCardList = () => (
  <div className='movies__wrapper'>
    <ul className="movies__list">
      {movies.movies.filter(movie => movie.saved === true).map(movieInfo => {
        return <MoviesCard movieInfo={movieInfo} key={movieInfo._id} />
      })}
    </ul>
    <button type="button" className="movies__btn">Ещё</button>
  </div>
);