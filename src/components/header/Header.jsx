import styles from './header.module.scss'
import Logo from '/assets/brand-logo.png?url';
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className={styles.header}>
        <img src={Logo} alt="Brand logo" />
        <nav>
          <ul>
            <li>
              <Link to={`/user/mock`}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to={`/users`}>
                Profil
              </Link>
            </li>
            <li>
              <Link to={`/reglage`}>
                Réglage
              </Link>
            </li>
            <li>
              <Link to={`/communaute`}>
                Communauté
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;

