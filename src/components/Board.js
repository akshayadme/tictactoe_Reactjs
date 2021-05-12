import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNest, setIsXNext] = useState(false);

  const handleClick = position => {
    if (board[position]) return;

    setBoard(prev => {
      prev.map((square, pos) => {
        if (pos === position) {
          return isXNest ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="bboard[o]ard-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="bboard[o]ard-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
