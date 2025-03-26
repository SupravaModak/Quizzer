import React from "react";
import { quizzes } from "../data/quizzes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";
import "../styles/home.css";  // ✅ Using separate CSS for Home Page

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <h1 className="home-title">🧠 Welcome to the Quiz App</h1>
      <p className="home-subtitle">Test your knowledge with fun quizzes!</p>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className="quiz-btn"
            onClick={() => {
              dispatch(startQuiz(quiz.id));
              navigate("/quiz");
            }}
          >
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
