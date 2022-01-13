import styles from './Repo.module.css';

export const Repo = ({ name, language }) => {
  return (
    <li className={styles.repo}>
      <h2>{name}</h2>
      <h3 className={styles.language}>{language}</h3>
    </li>
  );
};
