import { useEffect, useState } from 'react';
import { Repo } from './Repo';
import { Spinner } from '../atoms/Spinner';
import styles from './Users.module.css';

export const Users = ({ url }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error!: Status ${response.status}`);
        }

        const responseData = await response.json();
        setRepos(responseData);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRepos();
  }, [url]);

  return (
    <section className={styles.repo_section}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.repo_list}>
          {repos &&
            repos.map((repo) => <Repo key={repo.id} name={repo.name} />)}
        </ul>
      )}
    </section>
  );
};
