import styles from './header.module.scss'
import Logo from '/assets/brand-logo.png?url';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header className={styles.header}>
        <img src={Logo} alt="Brand logo" />
        <nav>
          <ul>
            <li>
              <NavLink to={`/user/mock`} className={({isActive}) => isActive ? `${styles.active}` : ""}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users`}>
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink to={`/reglage`}>
                Réglage
              </NavLink>
            </li>
            <li>
              <NavLink to={`/communaute`}>
                Communauté
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;

