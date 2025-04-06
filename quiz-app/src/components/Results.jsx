import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AlgoliaSearch from './AlgoliaSearch';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>You got {score} out of {total} questions correct!</p>
      <button onClick={handleRestart}>Restart Quiz</button>
      <hr />
      <AlgoliaSearch />
    </div>
  );
};

export default Results;
