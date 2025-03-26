import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";
import "./styles.css";

const QuizItem = ({ quiz }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="quiz-item" onClick={() => {
      dispatch(startQuiz(quiz.id));
      navigate("/quiz");
    }}>
      <h3>{quiz.title}</h3>
    </div>
  );
};

export default QuizItem;
