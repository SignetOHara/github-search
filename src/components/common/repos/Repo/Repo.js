import styles from './Repo.module.css';
import { useNavigate } from 'react-router-dom';

export const Repo = ({ repoName, language, userName }) => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    navigate(`/${userName}/${repoName}`);
  };

  return (
    <li className={styles.repo} onClick={clickHandler}>
      <h2>{repoName}</h2>
      <h3 className={styles.language}>{language}</h3>
    </li>
  );
};
