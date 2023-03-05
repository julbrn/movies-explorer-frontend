import './Movies.css';
import { SearchForm } from './SearchForm/SearchForm';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';
import moviesApi from "../../utils/MoviesApi";
import { filterShorts } from '../../utils/constants';

export const Movies = ({ handleMovieSave, handleMovieDelete, savedMoviesList, serverErrorMessage }) => {
  const [isShortsSelected, setIsShortsSelected] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNoMatches, setIsNoMatches] = useState(false);
  const [serverMovies, setServerMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShortsSelected(true);
    } else {
      setIsShortsSelected(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setAllMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterShorts(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

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

  function handleSetFilteredMovies(movies, query, shortsCheckbox) {
    const moviesList = filterMovies(movies, query, shortsCheckbox);
    moviesList.length === 0 ? setIsNoMatches(true) : setIsNoMatches(false);
    setAllMovies(moviesList);
    setFilteredMovies(shortsCheckbox ? filterShorts(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  function handleMovieSearch(inputValue) {
    localStorage.setItem('movieSearch', inputValue);
    localStorage.setItem('shortMovies', isShortsSelected);
    if (!serverMovies.length) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((data) => {
          setServerMovies(data);
          handleSetFilteredMovies(data, inputValue, isShortsSelected);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      handleSetFilteredMovies(serverMovies, inputValue, isShortsSelected);
    }
  }

  function toggleShortMovies() {
    setIsShortsSelected(!isShortsSelected);
    if (!isShortsSelected) {
      setFilteredMovies(filterShorts(allMovies));
    } else {
      setFilteredMovies(allMovies);
    }
    localStorage.setItem('shortMovies', !isShortsSelected);
  }


  return (
    <>
      <main className="movies">
        <SearchForm handleMovieSearch={handleMovieSearch}
          toggleShortMovies={toggleShortMovies}
          shortMovies={isShortsSelected} />
        <MoviesCardList isLoading={isLoading}
          moviesList={filteredMovies}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMoviesList={savedMoviesList}
          isNoMatches={isNoMatches}
          serverErrorMessage={serverErrorMessage} />
      </main>
    </>
  );
}
