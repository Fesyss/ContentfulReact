import React from 'react';

const Question = ({ question, onAnswer }) => {
  if (!question) {
    return <div>No question provided.</div>;
  }

  const { text, possibleAnswers, answer } = question;

  const answers = Array.isArray(possibleAnswers) ? possibleAnswers : [];

  if (answers.length === 0) {
    return <div>No possible answers available for this question.</div>;
  }

  const handleOptionClick = (option) => {
    const isCorrect = option === answer;
    onAnswer(isCorrect);
  };

  return (
    <div>
      <p>{text}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {answers.map((option, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            <button onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
