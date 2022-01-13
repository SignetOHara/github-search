import { useState, useEffect, useReducer } from 'react';
import { dataFetchReducer } from '../reducers/dataFetchReducer';

export const useApi = () => {
  const [url, setUrl] = useState(``);

  // const [state, dispatch] = useReducer(dataFetchReducer, {
  //   isLoading: false,
  //   data: [],
  //   isError: {
  //     status: false,
  //     msg: '',
  //   }
  // })

  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    msg: '',
  });

  useEffect(() => {
    const fetchRepos = async () => {
      if (url === '') return;
      setRepos([]);
      setIsLoading(true);
      setIsError({ status: false, msg: '' });
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error!: Status ${response.status}`);
        }

        const responseData = await response.json();

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
  }, [url]);

  return [{ repos, isLoading, isError }, setUrl];
};
