import React from 'react';
import { Card } from '..';

interface MessageResultProps {
  message: any;
  msgProcess: any;
}

export const MessageResult: React.FC<MessageResultProps> = ({
  message,
  msgProcess,
}) => {
  return (
    <Card title='Received messages'>
      <div className='flex'>
        <h2 className='mr-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
          ID:
        </h2>
        <p className='mx-auto text-base font-medium leading-relaxed text-blueGray-700 '>
          {message.id}
        </p>
      </div>

      <div className='flex'>
        <h2 className='mr-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
          Message:
        </h2>
        <p className='mx-auto text-base font-medium leading-relaxed text-blueGray-700 '>
          {message.data}
        </p>
      </div>

      <div className='flex'>
        <h2 className='mr-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
          Date:
        </h2>
        <p className='mx-auto text-base font-medium leading-relaxed text-blueGray-700 '>
          {message.processingAt}
        </p>
      </div>

      <div className='border border-gray-400 mt-4 mb-4' />

      <h2 className='mt-4 mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
        Processing information
      </h2>
      <div className='flex'>
        <h2 className='mr-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
          Message:
        </h2>
        <p className='mx-auto w-3/5 text-base font-medium leading-relaxed text-blueGray-700 '>
          {msgProcess.message}
        </p>
      </div>
    </Card>
  );
};
