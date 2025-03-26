import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAnswer, submitAnswer, nextQuestion } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";
import "../styles/quiz.css";  // ✅ Ensure correct import

const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentQuiz, quizIndex, selectedAnswer } = useSelector(state => state.quiz);

  useEffect(() => {
    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.pathname);
    });
  }, []);

  if (!currentQuiz) return <h2>Loading...</h2>;
  if (quizIndex === -1) return navigate("/result");

  const currentQuestion = currentQuiz.questions[quizIndex];

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "option-btn";
          
          if (selectedAnswer !== null) {
            if (index === currentQuestion.correct) {
              buttonClass += " correct"; // ✅ Show the correct answer in green
            } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correct) {
              buttonClass += " incorrect"; // ❌ Highlight wrong answer in red
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => dispatch(selectAnswer(index))}
              disabled={selectedAnswer !== null} // Prevent changing answer after selection
            >
              {option}
            </button>
          );
        })}
      </div>
      <button className="primary-btn" disabled={selectedAnswer === null} onClick={() => dispatch(submitAnswer())}>
        Check Answer
      </button>
      <button className="secondary-btn" onClick={() => dispatch(nextQuestion())}>Next</button>
    </div>
  );
};

export default QuizPage;
