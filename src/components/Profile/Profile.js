import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

export const Profile = () => {
  return (
    <>
      <Header />
      <section className="profile">
        <form action="/" name="edit" className="profile__form">
          <fieldset className="profile__fields">
            <h2 className="profile__greeting">Привет, некто!</h2>
            <label className="profile__label">
              <span className="profile__field-name">Имя</span>
              <input className="profile__field" type="text" value="Чимс" name="name"
                id="name" required />
            </label>
            <label className="profile__label">
              <span className="profile__field-name">E-mail</span>
              <input className="profile__field profile__field_type_error" value="cheems@yandex.ru" type="text" name="email"
                id="email" required />
            </label>
          </fieldset>
          <div className="profile__buttons">
            <button className="link link_type_edit">Редактировать</button>
            <button className="link link_type_logout">Выйти из аккаунта</button>
          </div>
        </form>
      </section>

    </>
  )
}