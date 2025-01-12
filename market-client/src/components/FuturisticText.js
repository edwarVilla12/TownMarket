import React from 'react';
import '../styles/FuturisticText.css';

const FuturisticText = ({ text, className }) => {
  return (
    <div className={`cyber-text ${className}`}>
      {text}
    </div>
  );
};

export default FuturisticText;