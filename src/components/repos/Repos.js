import { Repo } from './Repo';
import { Spinner } from '../atoms/Spinner';
import { Error } from '../atoms/Error';
import styles from './Repos.module.css';

export const Repos = ({ repos, isError, isLoading }) => {
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
