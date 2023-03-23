import { useCallback, useState } from 'react';
import { IAuthHook } from '../types/types';
import { to } from '@global/helpers/awaitToFunction';

function useAsync({ asyncFunction, duration }: IAuthHook) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');

  const execute = useCallback(async () => {
    const [error, response] = await to(asyncFunction());
    debugger;

    if (response) {
      setIsSuccess(true);
      setResult('ees');
    } else {
      setIsSuccess(false);
      setError(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, duration);
  }, [asyncFunction]);

  return { result, loading, error, isSuccess, execute };
}

export default useAsync;
