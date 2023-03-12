import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { MOVIE_BASE_URL } from "../../../utils/constants";
import { convertTimeToHours } from "../../../utils/movieFunctions";

export const MoviesCard = ({
  movieInfo,
  handleMovieSave,
  handleMovieDelete,
  saved,
}) => {
  const location = useLocation();
  const isLocationSaved = location.pathname.includes("saved");

  function handleMovieSaveClick() {
    handleMovieSave(movieInfo);
  }

  function handleMovieDeleteClick() {
    handleMovieDelete(movieInfo);
  }
  return (
    <li className="card">
      <figure className="card__container">
        <figcaption className="card__caption">
          <p className="card__title">{movieInfo.nameRU}</p>
          <p className="card__duration">
            {convertTimeToHours(movieInfo.duration)}
          </p>
        </figcaption>
        <a href={movieInfo.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__img"
            src={
              movieInfo.image.url
                ? `${MOVIE_BASE_URL}/${movieInfo.image.url}`
                : movieInfo.image
            }
            alt={movieInfo.nameRU}
          />
        </a>
        <button
          className={`card__btn
          ${isLocationSaved ? "card__btn_saved" : ""}
          ${saved && !isLocationSaved ? "card__btn_active" : ""}`}
          aria-label={
            isLocationSaved
              ? "Удалить из избранного"
              : saved
              ? "Удалить из избранного"
              : "Добавить в избранное"
          }
          onClick={
            saved || isLocationSaved
              ? handleMovieDeleteClick
              : handleMovieSaveClick
          }
        ></button>
      </figure>
    </li>
  );
};
