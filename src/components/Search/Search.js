import { useState } from 'react';
import styles from './Search.module.css';

const githubId = process.env.REACT_APP_GITHUB_ID;
const githubSecret = process.env.REACT_APP_GITHUB_SECRET;

export const Search = ({ setUrl, setIsError }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setIsError({ status: true, msg: 'Please enter a User!' });
    } else {
      setUrl(
        `https://api.github.com/users/${text}/repos?sort=created:asc&client_id=${githubId}&client_secret=${githubSecret}`
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
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Search Users
        </button>
      </form>
    </section>
  );
};
