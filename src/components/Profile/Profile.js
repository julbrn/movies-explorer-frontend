import React, { useContext, useEffect, createRef, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

export const Profile = ({ onSignOut, onUpdateUser }) => {
  const nameInput = createRef();
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email
    });
  }

  function handleEditClick() {
    setIsInputActive(true);
  };

  return (
    <>
      <main className="profile">
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
                ref={nameInput}
                disabled={!isInputActive}
                minLength='2'
                maxLength='40'
                pattern='^[A-Za-zА-Яа-яЁё /s -]+$' />
              <span
                className="profile__field-error"
              >
                {errors.name ? (errors.name.includes('короче') ? errors.name : `Имя может содержать только латиницу,
                кириллицу, пробел или дефис.`) : ''}
              </span>
            </label>
            <label className="profile__label">
              <span className="profile__field-name">E-mail</span>
              <input className="profile__field profile__field_type_error" value={values.email || ''} type="email" name="email"
                id="email" required placeholder="e-mail" onChange={handleChange} disabled={!isInputActive} />
              <span
                className="profile__field-error">{errors.email ? 'Пожалуйста, введите корректный email-адрес.' : ''}</span>
            </label>
          </fieldset>
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
              <button type="button" className="link link_type_edit" onClick={handleEditClick}>Редактировать</button>
              <button type="button" className="link link_type_logout" onClick={onSignOut}>Выйти из аккаунта</button>
            </div>)}
        </form>
      </main>

    </>
  )
}