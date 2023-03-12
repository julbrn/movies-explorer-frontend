import './AboutMe.css';
import meme from '../../../images/cheems.jpg';
import { Portfolio } from '../Portfolio/Portfolio.js'

export const AboutMe = () => (
  <article className="main about-me" id="about-me">
    <h2 className="main__title">Студент</h2>
    <section className="about-me__columns">
      <div className="about-me__column">
        <div className="about-me__description">
          <h2 className="about-me__title">Чимс</h2>
          <h3 className="about-me__subtitle">Начинающий фронтенд-разработчик, 28 лет</h3>
          <p className="about-me__text">
            Aute anim dolore enim laboris ullamco do ea elit amet amet duis exercitation consectetur. Pariatur mollit ullamco nulla duis velit adipisicing deserunt ipsum voluptate et sunt deserunt. Consequat exercitation Lorem aliquip proident dolore laboris cupidatat eu et nostrud officia tempor mollit labore. Adipisicing officia in nulla sint tempor quis magna cupidatat enim enim aliqua. Sint fugiat do esse magna velit eiusmod id sit esse eiusmod do.
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