import ReactMarkdown from 'react-markdown';
import { useApi } from '../../../hooks/useApi';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Error } from '../../atoms/Error';
import { Spinner } from '../../atoms/Spinner';
import styles from './Project.module.css';
import { Button } from '../../atoms/Button';

export const Project = () => {
  const [{ data, isLoading, isError }, doFetch] = useApi();
  const [readme, setReadme] = useState();
  const { user, repo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    doFetch(
      `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`
    );
    if (!Array.isArray(data)) {
      setReadme(data);
    } else {
      setReadme('');
    }
  }, [doFetch, user, repo, data]);

  return (
    <main className={styles.container}>
      <h2>{user}'s</h2>
      <h3>{repo}'s md file</h3>
      <Button type="button" text="Go Back" click={() => navigate(-1)} />
      {isError.status && <Error msg={"MD file can't be found!"} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={isError.status ? '' : styles.markdownContainer}>
          <ReactMarkdown>{readme}</ReactMarkdown>
        </section>
      )}
    </main>
  );
};
