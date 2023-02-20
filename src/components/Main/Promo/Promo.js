import './Promo.css';

export const Promo = ({ children }) => (
  <section className="promo" aria-label="Промо">
    <h1 className="promo__title">
      Учебный проект студента факультета Веб&#x2011;разработки.
    </h1>
    {children}
  </section>
);