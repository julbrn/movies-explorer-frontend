import { MOVIE_BASE_URL } from '../utils/constants';

import { checkServerResponse } from './checkServerResponse.js';

class MoviesApi {
  constructor({ serverUrl, headers }) {
    this._headers = headers;
    this._serverUrl = serverUrl;
  }

  getAllMovies() {
    return fetch(`${this._serverUrl}/beatfilm-movies`, {
      headers: this._headers,
    },
    )
      .then(checkServerResponse)
  };
}

const moviesApi = new MoviesApi({
  serverUrl: MOVIE_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default moviesApi;