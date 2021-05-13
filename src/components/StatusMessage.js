import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoves = current.board.every((el) => el !== null);

  return (
    <>
      <h2>
        {winner && `Winner is ${winner}`}{" "}
        {!winner && !noMoves && `Next player is ${current.isXNext ? "X" : "O"}`}
        {!winner && noMoves && "Game Over!! Match Tied..."}
      </h2>
    </>
  );
};

export default StatusMessage;
