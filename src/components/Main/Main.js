import './Main.css';
import { Promo } from './Promo/Promo.js';
import { AboutProject } from './AboutProject/AboutProject.js';
import { Techs } from './Techs/Techs.js';
import { NavTab } from './NavTab/NavTab.js';
import { AboutMe } from './AboutMe/AboutMe.js';

export const Main = () => (
  <main className="main">
    <Promo>
      <NavTab />
    </Promo>
    <AboutProject />
    <Techs />
    <AboutMe />
  </main>
);