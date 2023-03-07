import './FilterCheckbox.css';

export const FilterCheckbox = ({ toggleShortMovies, shortMovies }) => (
  <>
    <div className="shorts">
      <span className="shorts__title">Короткометражки</span>
      <label className="shorts__label" htmlFor="shorts">
        <input
          onChange={toggleShortMovies}
          checked={shortMovies ? true : false}
          className="shorts__checkbox"
          type="checkbox"
          id="shorts"
          name="shorts"
        />
        <div className="shorts__toggle" />
      </label>
    </div>
  </>
);