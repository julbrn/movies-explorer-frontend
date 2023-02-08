import './Main.css';
import { Promo } from './Promo/Promo.js';
import { AboutProject } from './AboutProject/AboutProject.js';
import { Techs } from './Techs/Techs.js';
import { NavTab } from './NavTab/NavTab.js';
import { AboutMe } from './AboutMe/AboutMe.js';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';

export const Main = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Promo>
      <NavTab />
    </Promo>
    <AboutProject />
    <Techs />
    <AboutMe />
    <Footer />
  </>
);