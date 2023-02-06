import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { NotFound } from '../NotFound/NotFound';
import './App.css';

export const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/404"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;