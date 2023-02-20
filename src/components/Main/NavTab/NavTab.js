import './NavTab.css';

export const NavTab = () => (
  <div className="navtab">
    <a
      href="#about-project"
      className="link link_place_navtab grey-button"
    >
      <span>О проекте</span>
    </a>
    <a
      href="#techs"
      className="link link_place_navtab grey-button"
    >
      <span>Технологии</span>
    </a>
    <a
      href="#about-me"
      className="link link_place_navtab grey-button"
    >
      <span>Студент</span>
    </a>
  </div>
);