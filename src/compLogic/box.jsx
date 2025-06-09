import React from 'react';

function Box({ value, onClick, isWinning }) {
  return (
   <div
      className={`h-24 w-24 border-4 flex justify-center items-center text-4xl font-bold cursor-pointer transition 
        ${isWinning ? 'bg-green-300 scale-105 border-green-500' : 'bg-white'}
      `}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Box;
