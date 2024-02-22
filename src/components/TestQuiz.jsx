import React, { useState } from "react";
import Result from "./Result";
import MathsQuiz from "../questions/MathsQuiz";

const TestQuiz = () => {
  const [currQts, setCurrQts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [viewResult, setViewResult] = useState(0);
  const [clicked, setClicked] = useState(0);

  const refreshCorrect = () => {
    if (clicked === MathsQuiz[currQts].ansOpt) {
      setCorrect((prevCorrect) => {
        return prevCorrect + 1;
      });
    }
    setClicked(0);
  };

  const nextQts = () => {
    refreshCorrect();
    currQts < MathsQuiz.length - 1 ? setCurrQts(currQts + 1) : setViewResult(1);
  };

  const again = () => {
    setCurrQts(0);
    setCorrect(0);
    setViewResult(0);
    setClicked(0);
  };

  return (
    <div className="container">
      <div className="quiz-wrapper">
        {viewResult ? (
          <Result
            correct={correct}
            total={MathsQuiz.length}
            playAgain={again}
          />
        ) : (
          <>
            <div className="question-container">
              <span className="question-number">
                Q.{currQts + 1}) {MathsQuiz[currQts].qts}
              </span>
            </div>
            <div>
              {MathsQuiz[currQts].opts.map((opt, index) => {
                return (
                  <button
                    className={`btn ${clicked == index + 1 ? "checked" : null}`}
                    key={index}
                    onClick={() => {
                      return setClicked(index + 1);
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <button className="next-btn" onClick={nextQts}>
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestQuiz;
