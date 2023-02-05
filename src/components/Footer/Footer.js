import './Footer.css';

export const Footer = () => (
  <footer className="section footer">
    <section className="footer__container">
      <h5 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <div className="footer__info">
        <span className="footer__year">
          &copy; {new Date().getFullYear()}
        </span>
        <ul className="footer__links">
          <li>
            <a
              href="https://melodyn.ru"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julbrn"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
);