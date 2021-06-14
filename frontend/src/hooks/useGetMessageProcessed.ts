import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGetMessage } from '.';
import { API_URL } from '../constants';

export default function useGetMessageProcessed() {
  const [messageProcessed, setMessageProcessed] = useState({}) as any;

  const { message } = useGetMessage();

  useEffect(() => {
    const getProcessedMessage = async () => {
      const messageId = message.id;

      const resp = await axios.post(`${API_URL}/messages/process`, {
        messageId: messageId,
      });
      const result = await resp.data;
      setMessageProcessed(result);
    };

    getProcessedMessage();

    return () => setMessageProcessed({});
  }, [message.id]);

  return { messageProcessed };
}
