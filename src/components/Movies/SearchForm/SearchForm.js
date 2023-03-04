import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from "../../../hooks/useFormValidation";
import { useState } from 'react';

export const SearchForm = ({ handleMovieSearch, toggleShortMovies, shortMovies }) => {
  const { values, handleChange } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');
  const searchQuery = values.movie;

  function handleSubmit(evt) {
    evt.preventDefault();

    if (searchQuery) {
      handleMovieSearch(searchQuery);

    }
  }

  return (
    <form name="search" className="search" onSubmit={handleSubmit} noValidate>
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
  );
}