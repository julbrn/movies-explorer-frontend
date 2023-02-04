import './AboutProject.css';

export const AboutProject = () => (
  <section className="section about-project" id="about-project">
    <h2 className="section__title">О проекте</h2>
    <div className="about-project__columns">
      <div className="about-project__column">
        <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about-project__column">
        <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <div className="progress">
      <div className="progress__column progress__column_color_green">
        <span className="progress__text">1 неделя</span>
      </div>
      <div className="progress__column progress__column_color_gray">
        <span className="progress__text">4 недели</span>
      </div>
      <div className="progress__column">
        <span className="progress__text-below">Back-end</span>
      </div>
      <div className="progress__column">
        <span className="progress__text-below">Front-end</span>
      </div>
    </div>
  </section>
);
