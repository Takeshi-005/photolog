import { reducer, Result } from './reducer';
import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

const useApi = (initialUrl: string, initialData: Result) => {
  const [query, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
    result: initialData
  });
  const instance = axios.create({
    baseURL: 'https://madefor.github.io/postal-code-api/api/v1'
  });

  useEffect(() => {
    const fetchApi = async () => {
      if (query === '') return;

      dispatch({ type: 'start' });
      try {
        const result = await instance.get(
          `/${query.slice(0, 3)}/${query.slice(3, 7)}.json`
        );

        dispatch({ type: 'succeed', payload: { result: result.data } });
      } catch (error) {
        dispatch({ type: 'fail', payload: { error } });
      }
    };

    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { state, setUrl };
};

export default useApi;
