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

export const App = () => {
  let history = useHistory();
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const location = useLocation();
  const headerIsNull = location.pathname.includes('sign') || location.pathname.includes('404');

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth.getProfile(token)
        .then((res) => {
          if (res) {
            setUserEmail(res.user.email);
            setIsLoggedIn(true);
          }
        })
        .catch(err => console.log(err));
    }
  }

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
        localStorage.setItem("jwt", data.token);
        setUserEmail(user.email);
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleSignOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setIsLoggedIn(false);
      setUserEmail('');
      history.push("/");
    }
  }

  const handleOnUpdateUser = (user) => {
    setIsLoading(true);

    mainApi
      .editUserInfo(user.name, user.email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        if (409) {
          console.log('уже существует');
        } else {
          console.log('ошибка')
        }
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
        <Route path="/404">
          <NotFound />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLoggedIn={isLoggedIn}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateUser={handleOnUpdateUser}
          isLoggedIn={isLoggedIn}
        />
        <Route path="/signup">
          <Register onRegister={handleRegister} isLoading={isLoading} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} isLoading={isLoading} />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
};

export default App;