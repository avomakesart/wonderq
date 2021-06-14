import { useEffect, useState } from 'react';
import { API_URL } from '../constants';

export default function useGetMessage() {
  const [message, setMessage] = useState({}) as any;

  useEffect(() => {
    const getData = async () => {;
      const resp = await fetch(`${API_URL}/messages`);
      const result = await resp.json();
      setMessage(result);
    };

    getData();
    return () => setMessage({});
  }, []);

  return { message };
}
