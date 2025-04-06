import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div>
      <div style={{ width: '100%', background: '#e0e0e0', height: '20px', borderRadius: '10px' }}>
        <div style={{
          width: `${percentage}%`,
          background: '#76c7c0',
          height: '100%',
          borderRadius: '10px',
          transition: 'width 0.5s'
        }}></div>
      </div>
      <p>Question {current} of {total}</p>
    </div>
  );
};

export default ProgressBar;
