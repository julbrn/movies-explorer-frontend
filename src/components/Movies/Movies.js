import './Movies.css';
import { SearchForm } from './SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';

export const Movies = () => (
  <>
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
    <Footer />
  </>
);