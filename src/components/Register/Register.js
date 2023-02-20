import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Register = () => (
  <main className="auth">
    <form action="/" name="register" className="auth__form">
      <div className="auth__fields-wrapper">
        <Link to="/" aria-label="На главную">
          <img className="logo" src={logo} alt="Лого BeatFilm" />
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>

        <fieldset className="auth__fields">
          <label className="auth__label" htmlFor="name">
            <span
              className="auth__field-name"
            >
              Имя
            </span>
            <input
              type="text"
              name="name"
              id="name"
              className="auth__field"
              minLength={3}
              placeholder="Имя"
              required
            />
            <span
              className="auth__field-error"
            >
              Что-то пошло не так...
            </span>
          </label>

          <label className="auth__label" htmlFor="email">
            <span
              className="auth__field-name"
            >
              E-mail
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="auth__field"
              placeholder="e-mail"
              required
            />
            <span
              className="auth__field-error">Что-то пошло не так...</span>
          </label>

          <label className="auth__label" htmlFor="password">
            <span
              className="auth__field-name"
            >
              Пароль
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className="auth__field"
              placeholder="Пароль"
              required
            />
            <span
              className="auth__field-error"
            >
              Что-то пошло не так...
            </span>
          </label>
        </fieldset>
      </div>

      <div className="auth__buttons">
        <button
          type="submit"
          className="button"
        >
          Зарегистрироваться
        </button>
        <p className="auth__question">
          Уже зарегистрированы?
          {' '}
          <Link
            to="/signin"
            className="link link_color_blue"
          >
            Войти
          </Link>
        </p>
      </div>
    </form>
  </main>
);