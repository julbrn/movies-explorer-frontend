import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from "../../hooks/useFormValidation";

export function Register({ onRegister, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <main className="auth">
      <form name="register" className="auth__form" onSubmit={handleSubmit} >
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
                minLength='3'
                placeholder="Имя"
                required
                value={values.name || ''}
                onChange={handleChange}
              />
              <span
                className="auth__field-error"
              >
                {errors.name || ''}
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
                value={values.email || ''}
                required
                onChange={handleChange}
              />
              <span
                className="auth__field-error">{errors.email || ''}</span>
            </label>

            <label className="auth__label" htmlFor="password">
              <span
                className="auth__field-name"
              >
                Пароль
              </span>
              <input
                minLength='4'
                maxLength='20'
                type="password"
                name="password"
                id="password"
                className="auth__field"
                placeholder="Пароль"
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span
                className="auth__field-error"
              >
                {errors.password || ''}
              </span>
            </label>
          </fieldset>
        </div>

        <div className="auth__buttons">
          <button
            type="submit"
            className="button"
            disabled={!isValid}
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
  )
};