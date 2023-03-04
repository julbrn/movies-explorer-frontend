export const MOVIE_BASE_URL = 'https://api.nomoreparties.co';
export const MAIN_BASE_URL = 'http://localhost:3000';

export function convertTimeToHours(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  if (hours == 0) {
    return `${minutes}м`
  }
  else return `${hours}ч ${minutes}м`;
};

export function filterShorts(movies) {
  return movies.filter((movie) => movie.duration <= 40);
};