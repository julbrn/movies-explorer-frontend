import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Main } from '../Main/Main';
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

export const App = () => {
  let history = useHistory();
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getInitialMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData.user);
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
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
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
        setIsLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        setUserEmail(user.email);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const tokenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth.getProfile(token)
        .then((res) => {
          if (res) {
            setUserEmail(res.user.email);
            setIsLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleSignOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setIsLoggedIn(false);
      setUserEmail('');
      history.push("/");
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/" >
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} isLoggedIn={isLoggedIn} handleBurgerLinkClick={handleBurgerLinkClick} />
          <Main />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/movies">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} isLoggedIn={isLoggedIn} handleBurgerLinkClick={handleBurgerLinkClick} />
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} isLoggedIn={isLoggedIn} handleBurgerLinkClick={handleBurgerLinkClick} />
          <SavedMovies />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} isLoading={isLoading} />
        </Route>
        <Route path="/signin">
          <Login handleLogin={handleLogin} isLoading={isLoading} />
        </Route>
        <Route path="/profile">
          <Header onClickBurger={onBurgerClick} isBurgerMenuOpened={isBurgerMenuOpened} isLoggedIn={isLoggedIn} handleBurgerLinkClick={handleBurgerLinkClick} />
          <Profile onSignOut={handleSignOut} />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
};

export default App;