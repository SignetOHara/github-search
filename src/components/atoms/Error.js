import styles from './Error.module.css';

export const Error = ({ msg }) => {
  return <div className={styles.error}>{msg}</div>;
};
