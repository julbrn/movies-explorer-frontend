import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { useEffect } from 'react';

export const MoviesCardList = ({ movies }) => {
  return (
    <div className='movies__wrapper'>
      <ul className="movies__list">
        {movies.map(movieInfo => {
          return <MoviesCard movieInfo={movieInfo} key={movieInfo.id} />
        })}
      </ul>
      <button type="button" className="movies__btn">Ещё</button>
    </div>)
};