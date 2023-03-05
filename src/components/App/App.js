import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Main } from '../Main/Main';
import ProtectedRoute from "../ProtectedRoute";
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Movies } from '../Movies/Movies';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SavedMovies } from '../Movies/SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import * as auth from "../../utils/auth";
import mainApi from '../../utils/MainApi.js';

export const App = () => {
  let history = useHistory();
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileErrorMessage, setProfileErrorMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [updatedSavedMoviesList, setUpdatedSavedMoviesList] = useState([]);
  const location = useLocation();
  const headerIsNull = location.pathname.includes('sign') || location.pathname.includes('404');
  const footerIsNull = location.pathname.includes('sign') || location.pathname.includes('404') || location.pathname.includes('profile');


  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const pathname = location.pathname;
    if (token) {
      auth.getToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push(pathname);
          }
        })
        .catch(err => console.log(err))
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
        .then(([userData, savedMoviesData]) => {
          setCurrentUser(userData.user);
          setSavedMoviesList(savedMoviesData.reverse());
        })
        .catch((err) => {
          console.log(err);
          setServerErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        });
    }
  }, [isLoggedIn]);



  function handleBurgerLinkClick() {
    setIsBurgerMenuOpened(false);
  }
  function onBurgerClick() {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
    document.querySelector(".nav_type_sidebar").classList.toggle("nav_type_sidebar-active");
  }

  function handleRegister(newUser) {
    setIsLoading(true);
    auth
      .signUp(newUser.email, newUser.password, newUser.name)
      .then((data) => {
        if (data) {
          console.log(data);
          history.push('/signin');
        }
      })
      .catch((err) => {
        setRegisterErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin(user) {
    setIsLoading(true);
    auth
      .signIn(user.email, user.password)
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          localStorage.setItem("jwt", data.token);
          history.push("/movies")
        }
      })
      .catch((err) => {
        setLoginErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleMovieSave = (movieToBeSaved) => {

    if (savedMoviesList.some((usersMovie) => usersMovie.movieId === movieToBeSaved.id)) { return };
    mainApi
      .saveMovie(movieToBeSaved)
      .then((newMovie) => setSavedMoviesList([...savedMoviesList, newMovie]))
      .catch((err) => console.log(err));
  }

  const handleMovieDelete = (movieToBeDeleted) => {
    const savedMovie = savedMoviesList.find(
      (usersMovie) => (usersMovie.movieId === movieToBeDeleted.id) || (usersMovie.movieId === movieToBeDeleted.movieId),
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newSavedMoviesList = savedMoviesList.filter(
          (usersMovie) => usersMovie.movieId !== movieToBeDeleted.movieId,
        );
        setSavedMoviesList(newSavedMoviesList);
        setUpdatedSavedMoviesList(savedMoviesList);
      })
      .catch((err) => console.log(err));
  }

  const handleUserUpdate = (user, setisServerResponseVisible, setIsInputActive) => {
    setIsLoading(true);
    mainApi
      .editUserInfo(user.name, user.email)
      .then((user) => {
        setCurrentUser(user);
        setisServerResponseVisible(true);
        setIsInputActive(false);
        setInterval(() => {
          setisServerResponseVisible(false);
        }, 3700);
      })
      .catch((err) => {
        setProfileErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }


  const handleSignOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.clear();
      setIsLoggedIn(false);
      history.push("/");
    }
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      {!headerIsNull && (
        <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} isLoggedIn={isLoggedIn} handleBurgerLinkClick={handleBurgerLinkClick} />
      )}
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLoggedIn={isLoggedIn}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMoviesList={savedMoviesList}
          savedMoviesPage={false}
          serverErrorMessage={serverErrorMessage}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          handleMovieDelete={handleMovieDelete}
          savedMoviesList={savedMoviesList}
          serverErrorMessage={serverErrorMessage}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateUser={handleUserUpdate}
          isLoggedIn={isLoggedIn}
          errorMessage={profileErrorMessage}
          isLoading={isLoading}
        />
        <Route path="/signup">
          <Register
            onRegister={handleRegister}
            isLoading={isLoading}
            errorMessage={registerErrorMessage} />
        </Route>
        <Route path="/signin">
          <Login
            onLogin={handleLogin}
            isLoading={isLoading}
            errorMessage={loginErrorMessage} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {!footerIsNull && (
        <Footer />
      )}
    </CurrentUserContext.Provider>
  );
};

export default App;