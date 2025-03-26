import React from "react";
import "./styles.css";

const Question = ({ question, selectedAnswer, handleAnswerClick }) => {
  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn 
              ${selectedAnswer === index ? "selected" : ""}
              ${selectedAnswer !== null && index === question.correct ? "correct" : ""}
              ${selectedAnswer !== null && selectedAnswer === index && selectedAnswer !== question.correct ? "incorrect" : ""}
            `}
            onClick={() => handleAnswerClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
