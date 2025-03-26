import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/result.css";  // ✅ Using separate CSS for Result Page

const ResultPage = () => {
  const { correctCount, currentQuiz } = useSelector(state => state.quiz);
  const navigate = useNavigate();
  const totalQuestions = currentQuiz.questions.length;
  const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

  return (
    <div className="result-container">
      <h2 className="result-title">🎉 Quiz Completed!</h2>
      <p className="result-subtitle">Here's how you did:</p>
      <p>✅ Correct Answers: <span className="correct">{correctCount}</span></p>
      <p>❌ Incorrect Answers: <span className="incorrect">{totalQuestions - correctCount}</span></p>
      <p>📊 Score: <span className="score">{percentage}%</span></p>
      <button className="home-btn" onClick={() => navigate("/")}>🏠 Go to Home</button>
    </div>
  );
};

export default ResultPage;
