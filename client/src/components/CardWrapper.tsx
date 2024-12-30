'use client';
import { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  title?: string;
}

const CardWrapper = (props: CardWrapperProps) => {
  const { children } = props;
  return (
    <div className='w-4/6 space-y-6 p-6 bg-dark-1 shadow-xl shadow-white/20 rounded-md max-w-sm mx-auto'>
      {children}
    </div>
  );
};

export default CardWrapper;
