import { checkServerResponse } from './checkServerResponse.js';
import { MAIN_BASE_URL } from './constants';
import { MOVIE_BASE_URL } from './constants';

class MainApi {
  constructor({ serverUrl, headers }) {
    this._headers = headers;
    this._serverUrl = serverUrl;
  }

  _getHeaders() {
    const jwt = localStorage.getItem("jwt");
    return {
      "Authorization": `Bearer ${jwt}`,
      ...this._headers
    }
  }

  editUserInfo(userName, userEmail) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })

      .then(checkServerResponse)
  }

  getMyMovies() {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    },
    )
      .then(checkServerResponse)
  };

  saveMovie(movie) {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        nameRU: movie.nameRU ? movie.nameRU : " – ",
        nameEN: movie.nameEN ? movie.nameEN : " – ",
        country: movie.country ? movie.country : " – ",
        director: movie.director ? movie.director : " – ",
        duration: movie.duration,
        year: movie.year ? movie.year : " – ",
        description: movie.description ? movie.description : "Без спойлеров",
        trailerLink: movie.trailerLink ? movie.trailerLink : "Трейлера нет",
        image: `${MOVIE_BASE_URL}/${movie.image.url}`,
        thumbnail: `${MOVIE_BASE_URL}/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        owner: movie.owner
      })
    })
      .then(checkServerResponse)
  };

  deleteMovie(id) {
    return fetch(`${this._serverUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
      credentials: 'include',
    })

      .then(checkServerResponse)
  };

  getUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    })
      .then(checkServerResponse)
  }
}


const mainApi = new MainApi({
  serverUrl: MAIN_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default mainApi;