import React from 'react';

const Colors = () => {
  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center px-16'>
      <div className='relative w-full max-w-lg'>
        <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full'></div>
        <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full'></div>
      </div>
    </div>
  );
};

export default Colors;
