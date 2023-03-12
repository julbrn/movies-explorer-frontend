import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Preloader } from "../Preloader/Preloader";
import { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { ERR_MESSAGE } from "../../utils/constants";

export function Login({ onLogin, isLoading, errorMessage, isInputDisabled }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    if (errorMessage.message) {
      errorMessage.message = "";
    }
  }, [handleChange, errorMessage]);

  return (
    <main className="auth">
      {isLoading ? (
        <Preloader />
      ) : (
        <form name="login" className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__fields-wrapper">
            <Link to="/" aria-label="На главную">
              <img className="logo" src={logo} alt="Лого BeatFilm" />
            </Link>
            <h1 className="auth__title">Рады видеть!</h1>

            <fieldset className="auth__fields">
              <label className="auth__label" htmlFor="email">
                <span className="auth__field-name">E-mail</span>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="email"
                  value={values.email || ""}
                  id="email"
                  className={"auth__field"}
                  placeholder="e-mail"
                  required
                  onChange={handleChange}
                  disabled={isInputDisabled}
                />
                <span className="auth__field-error">
                  {errors.email ? ERR_MESSAGE.INVALID_EMAIL : ""}
                </span>
              </label>

              <label className="auth__label" htmlFor="password">
                <span className="auth__field-name">Пароль</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="auth__field"
                  placeholder="пароль"
                  required
                  onChange={handleChange}
                  disabled={isInputDisabled}
                  value={values.password || ""}
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
              Войти
            </button>
            <p className="auth__question">
              Ещё не зарегистрированы?{" "}
              <Link to="/signup" className="link link_color_blue">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      )}
    </main>
  );
}
