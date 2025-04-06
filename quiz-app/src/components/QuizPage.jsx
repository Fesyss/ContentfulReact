import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizStep from './QuizStep';
import ProgressBar from './ProgressBar';

const QuizPage = ({ quizzes }) => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  console.log('QuizPage received quizzes:', quizzes);
  console.log('Current quizId:', quizId);

  const selectedStep = quizId 
    ? quizzes.find((step) => step.id === quizId)
    : quizzes[0];

  if (!selectedStep) {
    return <div>Quiz not found. Please check the quiz ID or try another quiz.</div>;
  }

  const totalQuestions = selectedStep.questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < totalQuestions) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      navigate('/results', { state: { score: isCorrect ? score + 1 : score, total: totalQuestions } });
    }
  };

  return (
    <div>
      <h1>{selectedStep.title}</h1>
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      <QuizStep 
        question={selectedStep.questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
};

export default QuizPage;
