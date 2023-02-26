import React, { useContext, useEffect, createRef } from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

export const Profile = ({ onSignOut, onUpdateUser }) => {
  const nameInput = createRef();
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("lsrgkgope");

    onUpdateUser({
      name: values.name,
      email: values.email
    });
  }

  return (
    <>
      <main className="profile">
        <form name="edit" className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__fields">
            <h2 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
            <label className="profile__label">
              <span className="profile__field-name">Имя</span>
              <input className="profile__field" type="text" value={values.name || ''} name="name"
                id="name" required placeholder="Имя" onChange={handleChange} ref={nameInput} />
            </label>
            <label className="profile__label">
              <span className="profile__field-name">E-mail</span>
              <input className="profile__field profile__field_type_error" value={values.email || ''} type="text" name="email"
                id="email" required placeholder="e-mail" onChange={handleChange} />
            </label>
          </fieldset>
          <div className="profile__buttons">
            <button type="submit" className="link link_type_edit">Редактировать</button>
            <button type="button" className="link link_type_logout" onClick={onSignOut}>Выйти из аккаунта</button>

          </div>
        </form>
      </main>

    </>
  )
}