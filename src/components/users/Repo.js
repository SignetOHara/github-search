import styles from './Repo.module.css';

export const Repo = ({ name }) => {
  return (
    <li className={styles.repo}>
      <h2>{name}</h2>
    </li>
  );
};
