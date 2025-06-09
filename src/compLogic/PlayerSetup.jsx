import React from 'react';

function PlayerSetup({ player1, player2, player1Symbol, setPlayer1, setPlayer2, setPlayer1Symbol, onStart }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">Enter Player Details</h2>

      <input
        type="text"
        placeholder="Player 1 Name"
        className="border p-2 rounded w-64"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />

      <input
        type="text"
        placeholder="Player 2 Name"
        className="border p-2 rounded w-64"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />

      <div className="flex gap-4 items-center">
        <span>Player 1 Symbol:</span>
        <select
          className="border p-2 rounded"
          value={player1Symbol}
          onChange={(e) => setPlayer1Symbol(e.target.value)}
        >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </div>

      <button
        className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={onStart}
        disabled={!player1 || !player2}
      >
        Start Game
      </button>
    </div>
  );
}

export default PlayerSetup;
