import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Preloader } from '../Preloader/Preloader';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { ERR_MESSAGE } from '../../utils/constants'

export const Profile = ({ onSignOut, onUpdateUser, errorMessage, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormWithValidation();
  const [isInputActive, setIsInputActive] = useState(false);
  const [isServerResponseVisible, setisServerResponseVisible] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  useEffect(() => {
    if (errorMessage.message) {
      errorMessage.message = '';
    }
  }, [handleChange]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email
    }, setisServerResponseVisible, setIsInputActive)

  }

  function handleEditClick() {
    setIsInputActive(true)
  };

  return (
    <>
      <main className="profile">
        {isLoading ? (<Preloader />) : (
          <form name="edit" className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__fields">
              <h2 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
              <label className="profile__label">
                <span className="profile__field-name">Имя</span>
                <input
                  className="profile__field"
                  type="text"
                  value={values.name || ''}
                  name="name"
                  id="name"
                  required
                  placeholder="Имя"
                  onChange={handleChange}
                  disabled={!isInputActive}
                  minLength='2'
                  maxLength='40'
                  pattern='^[A-Za-zА-Яа-яЁё /s -]+$' />
                <span
                  className="profile__field-error"
                >
                  {errors.name ? (errors.name.includes('короче') ? errors.name : ERR_MESSAGE.INVALID_NAME) : ''}
                </span>
              </label>
              <label className="profile__label">
                <span className="profile__field-name">E-mail</span>
                <input
                  className="profile__field"
                  value={values.email || ''}
                  type="email"
                  name="email"
                  id="email"
                  required placeholder="e-mail"
                  onChange={handleChange}
                  disabled={!isInputActive} />
                <span
                  className="profile__field-error">{errors.email ? ERR_MESSAGE.INVALID_EMAIL : ''}</span>
              </label>
            </fieldset>
            <div className='profile__server-responses'>
              <span
                className={`profile__server-response ${isServerResponseVisible ? 'profile__server-response_success' : ''}`}>Данные успешно обновлены!
              </span>
              <span
                className={`profile__server-response ${errorMessage.message ? 'profile__server-response_failure' : ''}`}>{errorMessage.message}
              </span>
            </div>
            {isInputActive ? (
              <button
                className="button button_type_save"
                type='submit'
                disabled={!isValid}
              >
                Сохранить
              </button>
            ) : (
              <div className="profile__buttons">
                <button
                  type="button"
                  className="link link_type_edit"
                  onClick={handleEditClick}>
                    Редактировать</button>
                <button
                  type="button"
                  className="link link_type_logout"
                  onClick={onSignOut}>
                    Выйти из аккаунта</button>
              </div>)}
          </form>
        )
        }
      </main>

    </>
  )
}