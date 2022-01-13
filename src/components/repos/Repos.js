import { Repo } from './Repo/Repo';
import { Spinner } from '../atoms/Spinner';
import { Error } from '../atoms/Error';
import styles from './Repos.module.css';

export const Repos = ({ repos, isError, isLoading }) => {
  console.log(repos);
  return (
    <section className={styles.repos_section}>
      {isError.status && <Error msg={isError.msg} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.repos_list}>
          {repos &&
            repos.map((repo) => (
              <Repo key={repo.id} name={repo.name} language={repo.language} />
            ))}
        </ul>
      )}
    </section>
  );
};
