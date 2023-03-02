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
import { SavedMovies } from '../Movies/SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import * as auth from "../../utils/auth";
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';

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
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const headerIsNull = location.pathname.includes('sign') || location.pathname.includes('404');



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
      Promise.all([mainApi.getUserInfo(), moviesApi.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData.user);
          setMovies(moviesData);
        })
        .catch((err) => {
          console.log(err);
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

  const handleSignOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setIsLoggedIn(false);
      localStorage.removeItem("allMovies");
      history.push("/");
    }
  }

  const handleOnUpdateUser = (user, setisServerResponseVisible, setIsInputActive) => {
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
          movies={movies}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateUser={handleOnUpdateUser}
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
    </CurrentUserContext.Provider>
  );
};

export default App;