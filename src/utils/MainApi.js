import { checkServerResponse } from './checkServerResponse.js';
import { MAIN_BASE_URL } from './constants';

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

  getInitialMovies() {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    },
    )
      .then(checkServerResponse)
  };

  addNewMovie(movie) {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      credentials: 'include',
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