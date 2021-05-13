import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoves = current.board.every((el) => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoves && (
        <>
          Next player is{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}

      <></>
      {!winner && noMoves && (
        <span className="text-red">Game Over!! Match Tied...</span>
      )}
    </div>
  );
};

export default StatusMessage;
