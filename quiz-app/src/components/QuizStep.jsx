import React from 'react';
import Question from './Question';

const QuizStep = ({ question, onAnswer }) => {
  if (!question) {
    return <div>No question available.</div>;
  }
  return (
    <div>
      <Question question={question} onAnswer={onAnswer} />
    </div>
  );
};

export default QuizStep;
