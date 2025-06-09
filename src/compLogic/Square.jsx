import React from 'react';
import Box from './box';

function Square({ squares, onClick,winningLine }) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {squares.map((value, idx) => (

        <Box key={idx} value={value}   onClick={() => onClick(idx)} isWinning={winningLine?.includes(idx)}/>

      ))}
    </div>
  );
}

export default Square;
