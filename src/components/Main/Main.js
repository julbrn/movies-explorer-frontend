import './Main.css';
import { Promo } from './Promo/Promo.js';
import { AboutProject } from './AboutProject/AboutProject.js';
import { Techs } from './Techs/Techs.js';
import { NavTab } from './NavTab/NavTab.js';
import { AboutMe } from './AboutMe/AboutMe.js';
import { Footer } from '../Footer/Footer';

export const Main = () => (
  <>
    <main>
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
    <Footer />
  </>
);