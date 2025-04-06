import React from 'react';
import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>If you see this, React Router is working correctly!</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default TestPage;
