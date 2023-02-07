import './SearchForm.css';

export const SearchForm = () => (
  <div className='section'>
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
      <div className="shorts">
        <span className="shorts__title">Короткометражки</span>
        <label className="shorts__label" htmlFor="shorts">
          <input
            className="shorts__checkbox"
            type="checkbox"
            id="shorts"
            name="shorts"
          />
          <div className="shorts__toggle" />
        </label>
      </div>
    </form>
  </div>
);