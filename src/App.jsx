import React, { useState } from 'react';
import Square from './compLogic/Square';
import calculateWinner from './compLogic/DeclaredWinner';
import PlayerSetup from './compLogic/PlayerSetup';
import Navbar from './designComp/Navbar';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player1Symbol, setPlayer1Symbol] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true);

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line;

  const isDraw = squares.every(Boolean) && !winner;

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = nextX ? 'X' : 'O';
    setSquares(newSquares);
    setNextX(!nextX);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setNextX(true);
    setGameStarted(true);
    setPlayer1('');
    setPlayer2('');
    setPlayer1Symbol('X');
  };

  return (
    <div className='h-screen'>
      <Navbar className="" />
      <div className="overflow-hidden p-4 flex flex-col items-center">

        {!gameStarted ? (
          <PlayerSetup
            player1={player1}
            player2={player2}
            player1Symbol={player1Symbol}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            setPlayer1Symbol={setPlayer1Symbol}
            onStart={() => setGameStarted(true)}
          />
        ) : (
          <>
            <div className="flex justify-center items-center">
              <Square squares={squares} onClick={handleClick} winningLine={winningLine} />
            </div>

            <div className="text-center mt-8">
              {winner ? (
                <h1 className="text-2xl text-green-500">
                  Winner is: {winner === player1Symbol ? player1 : player2}
                </h1>
              ) : isDraw ? (
                <h1 className="text-2xl">It's a Draw</h1>
              ) : (
                <h1 className="text-2xl">
                  Next Player: {nextX === (player1Symbol === 'X') ? player1 : player2}
                </h1>
              )}

              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleReset}
              >
                Reset Game
              </button>
            </div>
          </>
        )}
      </div>
    </div>

  );
}

export default App;
