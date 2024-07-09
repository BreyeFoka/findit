import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Oval 
        height={80} 
        width={80} 
        color="blue" 
        ariaLabel="loading" 
      />
    </div>
  );
};

export default Loading;
