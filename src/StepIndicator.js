// StepIndicator.js

import React from 'react';

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <ul className="recipe-step-indicator">
      {steps.map((step, index) => (
        <li key={index} className={index === currentStep ? 'active' : ''}>
          {step.stepNumber}
        </li>
      ))}
    </ul>
  );
};

export default StepIndicator;
