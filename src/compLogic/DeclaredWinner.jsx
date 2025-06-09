// import React from 'react'

function DelaredWinner(square) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //row

        [0, 3, 6], [1, 4, 7], [2, 5, 8], //col

        [0, 4, 8], [2, 4, 6]  //diag
    ];
     for (let [a, b, c] of lines) {
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return { winner: square[a], line: [a, b, c] }; // returns "X" or "O"
        }
    }

    return null

}

export default DelaredWinner;
