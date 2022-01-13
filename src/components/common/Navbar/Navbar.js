import { FaGithub } from 'react-icons/fa';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.h1}>
          <FaGithub className={styles.icon} />
          Github Profile Search
        </h1>
      </nav>
    </header>
  );
};
