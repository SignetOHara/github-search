import styles from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.loader}>
      <p>One moment please...</p>
    </div>
  );
};
