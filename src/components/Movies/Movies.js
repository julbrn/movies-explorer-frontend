import './Movies.css';
import { SearchForm } from './SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

export const Movies = () => (
  <>
    <Header />
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
    <Footer />
  </>
);