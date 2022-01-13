import styles from './Button.module.css';

export const Button = ({ type, text, click }) => {
  return (
    <button type={type} className={styles.btn} onClick={click}>
      {text}
    </button>
  );
};
