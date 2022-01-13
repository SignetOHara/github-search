import { useState, useEffect, useReducer } from 'react';
import { dataFetchReducer } from '../reducers/dataFetchReducer';
import axios from 'axios';

export const useApi = () => {
  const [url, setUrl] = useState(``);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    data: [],
    isError: {
      status: false,
      msg: '',
    },
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      if (url === '') return;
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get(url);
        if (!response.status) {
          throw new Error(`HTTP Error!: Status ${response.status}`);
        }

        if (!didCancel) {
          if (response.data.length === 0) {
            dispatch({
              type: 'FETCH_FAILURE',
              error: 'User has no projects!',
            });
          } else {
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({
            type: 'FETCH_FAILURE',
            error: 'User not found! Please search again',
          });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
