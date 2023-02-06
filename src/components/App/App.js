import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Preloader } from '../Preloader/Preloader';
import './App.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/404"
          element={<NotFound />}
        />
        <Route
          path="/movies"
          element={<NotFound />}
        />
        <Route
          path="/saved-movies"
          element={<Preloader />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </>
  );
};

export default App;