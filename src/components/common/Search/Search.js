import { useState } from 'react';
import { Button } from '../../atoms/Button';
import styles from './Search.module.css';

const githubId = process.env.REACT_APP_GITHUB_ID;
const githubSecret = process.env.REACT_APP_GITHUB_SECRET;

export const Search = ({ doFetch }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === '') {
      return;
    } else {
      doFetch(
        `https://api.github.com/users/${userName}/repos?sort=created:asc&client_id=${githubId}&client_secret=${githubSecret}`
      );
    }
  };

  return (
    <section className={styles.search_section}>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <label htmlFor="userSearch" className={styles.search_label}>
          <input
            className={styles.search_input}
            id="userSearch"
            type="text"
            placeholder="Search Github User..."
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <Button type="submit" text="Search Users" />
      </form>
    </section>
  );
};
