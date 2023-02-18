import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { SavedMoviesCardList } from './SavedMoviesCardList';
import { Footer } from '../../Footer/Footer';

export const SavedMovies = () => (
  <>
    <main className="movies">
      <SearchForm />
      <SavedMoviesCardList />
    </main>
    <Footer />
  </>
);