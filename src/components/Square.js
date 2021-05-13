import React from "react";

const Square = ({ value, onClick, isWinning }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`square ${isWinning ? "winning" : ""} ${
          value === "X" ? "text-green" : "text-orange"
        }`}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
