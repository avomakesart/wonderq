import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode | ReactNode[];
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className='container items-center px-5 py-12'>
      <div className='flex flex-wrap'>
        <div className='w-full mx-auto my-4 bg-white border rounded-lg shadow-xl'>
          <div className='p-6'>
            <h2 className='mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font'>
              {title}
            </h2>
            <div className='mb-3 text-base leading-relaxed text-blueGray-500'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
