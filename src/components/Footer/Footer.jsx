import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="section footer">
    <section className="footer__container">
      <h5 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <div className="footer__info">
        <span className="footer__year">&copy; {new Date().getFullYear()}</span>
        <ul className="footer__links">
          <li>
            <Link
              to="https://practicum.yandex.ru/"
              className="link link_place_footer"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/julbrn"
              className=" link footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </footer>
);
