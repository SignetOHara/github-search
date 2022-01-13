import { useEffect, useState } from 'react';
import { Repo } from './Repo';
import { Spinner } from '../atoms/Spinner';
import { Error } from '../atoms/Error';
import styles from './Repos.module.css';

export const Repos = ({ url, isError, setIsError }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      if (url === '') return;
      console.log(url);
      setRepos([]);
      setIsLoading(true);
      setIsError({ status: false, msg: '' });
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error!: Status ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        if (responseData.length === 0) {
          setIsError({
            status: true,
            msg: 'User has no projects!',
          });
        } else {
          setRepos(responseData);
        }
      } catch (error) {
        setIsError({
          status: true,
          msg: 'User not found! Please search again',
        });
      }
      setIsLoading(false);
    };
    fetchRepos();
  }, [url, setIsError]);

  return (
    <section className={styles.repos_section}>
      {isError.status && <Error msg={isError.msg} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.repos_list}>
          {repos &&
            repos.map((repo) => <Repo key={repo.id} name={repo.name} />)}
        </ul>
      )}
    </section>
  );
};
