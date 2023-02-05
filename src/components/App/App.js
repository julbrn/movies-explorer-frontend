import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import './App.css';

export const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;