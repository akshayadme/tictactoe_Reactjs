import React from "react";

const Square = ({ value, onClick, isWinning }) => {
  return (
    <>
      <button
        type="button"
        className="square"
        onClick={onClick}
        style={{ fontWeight: isWinning ? `800` : `normal` }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
