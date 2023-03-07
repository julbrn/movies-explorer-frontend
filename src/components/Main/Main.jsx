import './Main.css';
import { Promo } from './Promo/Promo';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { NavTab } from './NavTab/NavTab';
import { AboutMe } from './AboutMe/AboutMe';

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
  </>
);