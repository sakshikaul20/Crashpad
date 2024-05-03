
import React from 'react';

const NavigationView = ({ onNavigate }) => {
  const handleBack = () => {
    onNavigate('back');
  };

  const handleNext = () => {
    onNavigate('next');
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default NavigationView;