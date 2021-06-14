import axios from 'axios';
import React, { useState } from 'react';
import { Card } from '..';
import { API_URL } from '../../constants';

export const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]) as any;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const resp = await axios
      .post(`${API_URL}/messages/post`, { messageData: message })
      .then((res) => setItems(...items, res.data))
      .then(() =>
        setTimeout(() => {
          window.location.reload();
        }, 3000)
      );

    return resp;
  };

  return (
    <Card title='Write a message'>
      <form onSubmit={handleSubmit}>
        <div className='relative mt-4'>
          <label
            htmlFor='name'
            className='text-base leading-7 text-blueGray-500'
          >
            Message
          </label>
          <input
            type='text'
            id='message'
            name='message'
            placeholder='Start typing here...'
            onChange={(e: any) => setMessage(e.target.value)}
            className='w-full px-4 py-2 mt-2 text-base border border-gray-400 text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2'
          />
        </div>
        <button
          type='submit'
          className='w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-gray-800 border-gray-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-600 '
        >
          Send
        </button>
      </form>
    </Card>
  );
};
