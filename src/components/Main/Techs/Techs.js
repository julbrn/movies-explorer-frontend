import './Techs.css';

export const Techs = () => (
  <section className="section techs">
    <h2 className="section__title" id="techs">Технологии</h2>
    <div className="techs__description">
      <h2 className="techs__title">7&nbsp;технологий</h2>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
    </div>
    <ul className="techs__items">
      <li className="techs__item grey-button">
        <span className="techs__item-text">HTML</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">CSS</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">JS</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">React</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">Git</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">Express.js</span>
      </li>
      <li className="techs__item grey-button">
        <span className="techs__item-text">mongoDB</span>
      </li>
    </ul>
  </section>
);