import './AboutMe.css';
import meme from '../../../images/cheems.jpg';
import { Portfolio } from '../Portfolio/Portfolio.js'

export const AboutMe = () => (
  <article className="section about-me" id="about-me">
    <h2 className="section__title">Студент</h2>
    <section className="about-me__columns">
      <div className="about-me__column">
        <div className="about-me__description">
          <h2 className="about-me__title">Чимс</h2>
          <h3 className="about-me__subtitle">Начинающий фронтенд-разработчик, 28 лет</h3>
          <p className="about-me__text">
            Не задавайте мне вопросы, я только могу писать цветные буковки на тёмном фоне. Кстати, как выйти из Vim?  Bonk!
          </p>
        </div>
        <a className="link about-me__link" href="https://github.com/julbrn" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <div className="about-me__column">
        <img
          src={meme}
          className="about-me__image"
          alt="Мем Чимс"
        />
      </div>
    </section>
    <Portfolio />
  </article>
);