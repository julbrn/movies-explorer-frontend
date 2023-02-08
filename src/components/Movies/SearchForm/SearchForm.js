import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => (
  <form action="/" name="search" className="search">
    <label className="search-form__label" htmlFor="film">
      <input
        className="search-form__input"
        type="text"
        placeholder="Фильм"
        id="film"
        name="film"
        required
      />
      <button
        className="search__button"
        type="submit"
        aria-label="Искать"
      />
    </label>
    <FilterCheckbox />
  </form>
);