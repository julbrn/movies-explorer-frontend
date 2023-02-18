import React from 'react';
import './Profile.css';

export const Profile = () => {
  return (
    <>
      <section className="profile">
        <form action="/" name="edit" className="profile__form">
          <fieldset className="profile__fields">
            <h2 className="profile__greeting">Привет, некто!</h2>
            <label className="profile__label">
              <span className="profile__field-name">Имя</span>
              <input className="profile__field" type="text" defaultValue="Некто" name="name"
                id="name" required placeholder="Имя" />
            </label>
            <label className="profile__label">
              <span className="profile__field-name">E-mail</span>
              <input className="profile__field profile__field_type_error" defaultValue="nekto@yandex.ru" type="text" name="email"
                id="email" required placeholder="e-mail" />
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