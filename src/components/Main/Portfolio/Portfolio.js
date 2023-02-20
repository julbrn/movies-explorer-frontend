import './Portfolio.css';

export const Portfolio = () => (
  <section className="portfolio">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__items">
      <li className="portfolio__item-wrapper">
        <a
          className="portfolio__item"
          href="https://julbrn.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <span>         Статичный сайт</span>
          <span>↗</span>
        </a>
      </li>
      <li className="portfolio__item-wrapper">
        <a
          className="portfolio__item"
          href="https://julbrn.github.io/practice/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Адаптивный сайт</span>
          <span>↗</span>
        </a>
      </li>
      <li className="portfolio__item-wrapper">
        <a
          className="portfolio__item"
          href="https://julbrn.github.io/react-mesto-auth/#/sign-in"
          target="_blank"
          rel="noreferrer"
        >
          <span>Одностраничное приложение</span>
          <span>↗</span>
        </a>
      </li>
    </ul>
  </section>
);