import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { SavedMoviesCardList } from './SavedMoviesCardList';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

export const SavedMovies = () => (
  <>
    <Header />
    <main className="movies">
      <SearchForm />
      <SavedMoviesCardList />
    </main>
    <Footer />
  </>
);