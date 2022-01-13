import styles from './Error.module.css';

export const Error = ({ msg }) => {
  return <h2 className={styles.error}>{msg}</h2>;
};
