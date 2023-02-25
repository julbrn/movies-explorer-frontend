import { checkServerResponse } from './checkServerResponse.js';
import { MAIN_BASE_URL } from '../utils/constants';

class MainApi {
  constructor({ serverUrl, headers }) {
    this._headers = headers;
    this._serverUrl = serverUrl;
  }

  editUserInfo(userName, userEmail) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })

      .then(checkServerResponse(res))
  }

  getInitialMovies() {
    return fetch(`${this._serverUrl}/movies`, {
      headers: this._headers,
    },
    )
      .then(checkServerResponse(res))
  };

  addNewMovie(movie) {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
    })
      .then(checkServerResponse(res))
  }

  deleteMovie(id) {
    return fetch(`${this._serverUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })

      .then(checkServerResponse(res))
  }
}

export const mainApi = new MainApi({
  serverURL: 'http://localhost:3000',
  //serverURL: MAIN_BASE_URL,

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});