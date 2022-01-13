import ReactMarkdown from 'react-markdown';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Project = () => {
  const [{ data, isLoading, isError }, doFetch] = useApi();
  const [readme, setReadme] = useState();
  const { user, repo } = useParams();

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`
        );

        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP Error!: Status ${response.status}`);
        }
        const readmeText = await response.text();
        setReadme(readmeText);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReadme();
  }, []);

  return (
    <main>
      <section>
        <h1>{user}</h1>
        <ReactMarkdown>{readme}</ReactMarkdown>
      </section>
    </main>
  );
};
