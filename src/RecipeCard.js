// RecipeCard.js

import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import RecipeStep from './RecipeStep';

const RecipeCard = ({ recipe }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const { name, description, imageUrl, steps } = recipe;
  const currentRecipeStep = steps[currentStep];

  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <div className="recipe-description">
        <img src={`images/${imageUrl}`} alt="" />
        <p>{description}</p>
      </div>
      <StepIndicator steps={steps} currentStep={currentStep} />
      <RecipeStep step={currentRecipeStep} />
      <div className="command-bar">
        <button onClick={handlePreviousStep} disabled={currentStep === 0}>
          Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <p>Recipe completed!</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
