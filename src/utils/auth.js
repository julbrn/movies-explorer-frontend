import { MAIN_BASE_URL } from "./constants";
import { checkServerResponse } from './checkServerResponse.js';

export const signUp = (email, password, name) => {
  return fetch(`${MAIN_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then((res) => checkServerResponse(res))

};

export const signIn = (email, password) => {
  return fetch(`${MAIN_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkServerResponse(res))
};

export function getToken(token) {
  return fetch(`${MAIN_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => checkServerResponse(res))
}
