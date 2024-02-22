import React from "react";

const Result = ({ correct, total, playAgain }) => {
  return (
    <div className="result-container">
      <p className="result-text">
        You got <span className="correct-count">{correct}</span> out of{" "}
        <span className="total-count">{total}</span>
      </p>
      <button className="play-again-btn" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Result;
