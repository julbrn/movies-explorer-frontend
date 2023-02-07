import './Movies.css';
import { SearchForm } from './SearchForm/SearchForm';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

export const Movies = () => (
  <main className="section">
    <Header />
    <SearchForm />
  </main>
);