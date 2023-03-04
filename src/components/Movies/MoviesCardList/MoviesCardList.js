import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard.js';
import { useEffect } from 'react';
import { Preloader } from "../../Preloader/Preloader"

export const MoviesCardList = ({ isLoading,
  moviesList,
  handleMovieSave,
  handleMovieDelete,
  savedMoviesList,
  isMoviesFound }) => {
  function getSavedMovie(savedMoviesList, movie) {
    return savedMoviesList.find((savedMovie) => savedMovie.movieId === movie.id);
  }
  return (
    <div className='movies__wrapper'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="movies__list">
            {moviesList.map(movieInfo => {
              return <MoviesCard movieInfo={movieInfo} key={movieInfo.id || movieInfo._id}
                saved={getSavedMovie(savedMoviesList, movieInfo)}
                handleMovieSave={handleMovieSave}
                handleMovieDelete={handleMovieDelete} />
            })}
          </ul>
          <button type="button" className="movies__btn">Ещё</button>
        </>)
      }
    </div>)
};