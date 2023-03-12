import "./MoviesCardList.css";
import React, { useEffect, useState } from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard.jsx";
import { Preloader } from "../../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  ERR_MESSAGE,
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
  DESKTOP_CARD_QUANTITY,
  TABLET_CARD_QUANTITY,
  MOBILE_CARD_QUANTITY,
} from "../../../utils/constants";

export const MoviesCardList = ({
  isLoading,
  moviesList,
  handleMovieSave,
  handleMovieDelete,
  savedMoviesList,
  isNoMatches,
  serverErrorMessage,
}) => {
  const [cardRow, setCardRow] = useState(DESKTOP_CARD_QUANTITY);
  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const size = useWindowSize().width;
  const location = useLocation().pathname;

  function checkWindowSize() {
    if (size >= DESKTOP_WIDTH) {
      setCardRow(DESKTOP_CARD_QUANTITY);
    } else if (size >= TABLET_WIDTH) {
      setCardRow(TABLET_CARD_QUANTITY);
    } else if (size >= MOBILE_WIDTH) {
      setCardRow(MOBILE_CARD_QUANTITY);
    }
  }

  useEffect(() => {
    if (cardRow.total < moviesList.length) {
      setIsButtonHidden(false);
    } else if (cardRow.total >= moviesList.length) {
      setIsButtonHidden(true);
    }
  }, [moviesList.length, cardRow.total]);

  useEffect(() => {
    checkWindowSize();
  }, [size]);

  function getSavedMovie(savedMoviesList, movie) {
    return savedMoviesList.find(
      (savedMovie) => savedMovie.movieId === movie.id
    );
  }

  function handleButtonClick() {
    setCardRow({
      ...cardRow,
      total: cardRow.total + cardRow.more,
    });
  }

  return (
    <div className="movies__wrapper">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {isNoMatches ? (
            <p className="movies__error">{ERR_MESSAGE.NOT_FOUND}</p>
          ) : serverErrorMessage ? (
            <p className="movies__error">{serverErrorMessage}</p>
          ) : (
            <>
              <ul className="movies__list">
                {moviesList.slice(0, cardRow.total).map((movieInfo) => {
                  return (
                    <MoviesCard
                      movieInfo={movieInfo}
                      key={movieInfo.id || movieInfo._id}
                      saved={getSavedMovie(savedMoviesList, movieInfo)}
                      handleMovieSave={handleMovieSave}
                      handleMovieDelete={handleMovieDelete}
                    />
                  );
                })}
              </ul>
              {location === "/movies" && !isButtonHidden ? (
                <button
                  type="button"
                  className="movies__btn"
                  aria-label="Показать ещё"
                  onClick={handleButtonClick}
                >
                  Ещё
                </button>
              ) : null}
            </>
          )}
        </>
      )}
    </div>
  );
};
