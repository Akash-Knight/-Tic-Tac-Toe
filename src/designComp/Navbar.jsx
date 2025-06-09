import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🎮 Tic Tac Toe</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
