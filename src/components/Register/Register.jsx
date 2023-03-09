import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Preloader } from "../Preloader/Preloader";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { ERR_MESSAGE } from "../../utils/constants";

export function Register({
  onRegister,
  isLoading,
  errorMessage,
  isInputDisabled,
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    if (errorMessage.message) {
      errorMessage.message = "";
    }
  }, [handleChange]);

  return (
    <main className="auth">
      {isLoading ? (
        <Preloader />
      ) : (
        <form name="register" className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__fields-wrapper">
            <Link to="/" aria-label="На главную">
              <img className="logo" src={logo} alt="Лого BeatFilm" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>

            <fieldset className="auth__fields">
              <label className="auth__label" htmlFor="name">
                <span className="auth__field-name">Имя</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                  className="auth__field"
                  minLength="2"
                  maxLength="40"
                  placeholder="Имя"
                  required
                  value={values.name || ""}
                  onChange={handleChange}
                  disabled={isInputDisabled}
                />
                <span className="auth__field-error">
                  {errors.name
                    ? errors.name.includes("короче")
                      ? errors.name
                      : ERR_MESSAGE.INVALID_NAME
                    : ""}
                </span>
              </label>

              <label className="auth__label" htmlFor="email">
                <span className="auth__field-name">E-mail</span>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="email"
                  id="email"
                  className={`auth__field ${
                    errorMessage ? "auth__field_invalid" : ""
                  }`}
                  placeholder="e-mail"
                  required
                  onChange={handleChange}
                  value={values.email || ""}
                  disabled={isInputDisabled}
                />
                <span className="auth__field-error">
                  {errors.email ? ERR_MESSAGE.INVALID_EMAIL : ""}
                </span>
              </label>

              <label className="auth__label" htmlFor="password">
                <span className="auth__field-name">Пароль</span>
                <input
                  minLength="4"
                  maxLength="20"
                  type="password"
                  name="password"
                  id="password"
                  className="auth__field"
                  placeholder="Пароль"
                  required
                  value={values.password || ""}
                  onChange={handleChange}
                  disabled={isInputDisabled}
                />
                <span className="auth__field-error">
                  {errors.password || ""}
                </span>
              </label>
            </fieldset>
          </div>
          <span
            className={`auth__server-response ${
              errorMessage.message && "auth__server-response_failure"
            }`}
          >
            {errorMessage.message}
          </span>
          <div className="auth__buttons">
            <button
              type="submit"
              className="button"
              disabled={!isValid || isInputDisabled}
            >
              Зарегистрироваться
            </button>
            <p className="auth__question">
              Уже зарегистрированы?{" "}
              <Link to="/signin" className="link link_color_blue">
                Войти
              </Link>
            </p>
          </div>
        </form>
      )}
    </main>
  );
}
