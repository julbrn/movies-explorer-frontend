import './Promo.css';

export const Promo = () => (
  <section className="promo" aria-label="Промо">
    <h1 className="promo__title">
      Учебный проект студента факультета Веб-разработки.
    </h1>
    <div className="promo__links">
      <a
        href="#about-project"
        className="link link_place_promo"
      >
        <span className="promo__button-text">О проекте</span>
      </a>
      <a
        href="#techs"
        className="link link_place_promo"
      >
        <span className="promo__button-text">Технологии</span>
      </a>
      <a
        href="#about-me"
        className="link link_place_promo"
      >
        <span className="promo__button-text">Студент</span>
      </a>
    </div>
  </section>
);