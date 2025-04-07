import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import Results from './components/Results';
import contentfulService from './services/contentfulService';
import ThemeToggle from './components/ThemeToggle';
import './index.css'; 

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const data = await contentfulService.getQuizData();
        setQuizzes(data);
      } catch (err) {
        console.error('Error fetching quiz data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuizData();
  }, []);

  if (loading) {
    return <div>Loading quiz data...</div>;
  }

  if (error) {
    return <div>Error loading quiz data: {error.message}</div>;
  }
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          {/* ThemeToggle will always be visible */}
          <ThemeToggle />
        </header>
        <Routes>
          <Route path="/" element={<QuizPage quizzes={quizzes} />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
