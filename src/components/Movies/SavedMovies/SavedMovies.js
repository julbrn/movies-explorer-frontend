import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';
import { filterShorts } from '../../../utils/constants';

export const SavedMovies = ({ savedMoviesList, handleMovieDelete }) => {
  const [isShortsSelected, setIsShortsSelected] = useState(false);
  const [shownMovies, setShownMovies] = useState(savedMoviesList);
  const [isNoMatches, setIsNoMatches] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setIsShortsSelected(true);
      setShownMovies(filterShorts(savedMoviesList));
    } else {
      setIsShortsSelected(false);
      setShownMovies(savedMoviesList);
    }
  }, [savedMoviesList]);

  function handleMovieSearch(inputValue) {
    const filteredMovies = filterMovies(savedMoviesList, inputValue, isShortsSelected);
    if (filteredMovies.length !== 0) {
      setShownMovies(filteredMovies);
      setIsNoMatches(false);
    } else {
      setIsNoMatches(true);
    }
  }

  function filterMovies(movies, query, shortsCheckbox) {
    const moviesByQuery = movies.filter((movie) => {
      const movieRU = String(movie.nameRU).toLowerCase().trim();
      const movieEN = String(movie.nameEN).toLowerCase().trim();
      const searchedMovie = query.toLowerCase().trim();
      return movieRU.indexOf(searchedMovie) !== -1 || movieEN.indexOf(searchedMovie) !== -1;
    });

    if (shortsCheckbox) {
      return filterShorts(moviesByQuery);
    } else {
      return moviesByQuery;
    }
  }

  function toggleShortMovies() {
    if (isShortsSelected) {
      setIsShortsSelected(false);
      localStorage.setItem('shortSavedMovies', false);
      setShownMovies(savedMoviesList);
    } else {
      setIsShortsSelected(true);
      localStorage.setItem('shortSavedMovies', true);
      setShownMovies(filterShorts(savedMoviesList));
    }
  }

  return (
    <>
      <main className="movies">
        <SearchForm handleMovieSearch={handleMovieSearch} toggleShortMovies={toggleShortMovies} shortMovies={isShortsSelected} />
        <MoviesCardList moviesList={shownMovies} savedMoviesList={shownMovies} isNoMatches={isNoMatches} handleMovieDelete={handleMovieDelete} />
      </main>
    </>)
};