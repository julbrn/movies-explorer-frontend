import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from "../../../hooks/useFormValidation";
import { useState, useEffect } from 'react';
import { ERR_MESSAGE } from '../../../utils/constants';
import { useLocation } from 'react-router-dom';


export const SearchForm = ({ handleMovieSearch, toggleShortMovies, shortMovies }) => {
  const location = useLocation().pathname;
  const { values, handleChange } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState(false);
  const searchQuery = values.movie;

  useEffect(() => {
    setErrorMessage(false);
  }, [searchQuery]);

  useEffect(() => {
    if (location === '/movies') {
      values.movie = localStorage.getItem('movieSearch')
    };
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();

    if (searchQuery && (searchQuery != " ")) {
      handleMovieSearch(searchQuery);
    }
    else {
      setErrorMessage(true);
    }
  }

  return (
    <div className='search'>
      <form name="search" className="search__form" onSubmit={handleSubmit} noValidate>
        <label className="search__label" htmlFor="film">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            id="mpvie"
            name="movie"
            required
            onChange={handleChange}
            value={values.movie || ''}
          />
          <button
            className="search__button"
            type="submit"
            aria-label="Искать"
          />
        </label>
        <FilterCheckbox toggleShortMovies={toggleShortMovies} shortMovies={shortMovies} />
      </form>
      {errorMessage ? (<p className='search__error'>{ERR_MESSAGE.EMPTY_QUERY}</p>) : null}
    </div>
  );
}