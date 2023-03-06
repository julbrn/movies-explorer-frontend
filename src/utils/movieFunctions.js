import { shortMovie } from "./constants";
export function convertTimeToHours(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  if (hours == 0) {
    return `${minutes}м`
  }
  else return `${hours}ч ${minutes}м`;
};

export function filterShorts(movies) {
  return movies.filter((movie) => movie.duration <= shortMovie);
};

export function filterMovies(movies, query, shortsCheckbox) {
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
