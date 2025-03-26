import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../data/quizzes";

const quizSlice = createSlice({
  name: "quiz",
  initialState: { quizIndex: 0, selectedAnswer: null, correctCount: 0, currentQuiz: null },
  reducers: {
    startQuiz: (state, action) => {
      state.currentQuiz = quizzes.find(quiz => quiz.id === action.payload);
      state.quizIndex = 0;
      state.correctCount = 0;
      state.selectedAnswer = null;
    },
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    submitAnswer: (state) => {
      const currentQuestion = state.currentQuiz.questions[state.quizIndex];
      if (state.selectedAnswer === currentQuestion.correct) {
        state.correctCount++;
      }
    },
    nextQuestion: (state) => {
      if (state.quizIndex < state.currentQuiz.questions.length - 1) {
        state.quizIndex++;
        state.selectedAnswer = null;
      } else {
        state.quizIndex = -1; // Quiz is over
      }
    },
  },
});

export const { startQuiz, selectAnswer, submitAnswer, nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;
