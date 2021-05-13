import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const INITIAL_STATE = [
  {
    board: Array(9).fill(null),
    isXNext: true,
  },
];

const App = () => {
  const [history, setHistory] = useState(INITIAL_STATE);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquare } = calculateWinner(current.board);

  const handleClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const newGame = () => {
    setHistory(INITIAL_STATE);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleClick={handleClick}
        winningSquare={winningSquare}
      />
      <button type="button" onClick={newGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
