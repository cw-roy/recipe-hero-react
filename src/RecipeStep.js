// RecipeStep.js

import React from 'react';

const RecipeStep = ({ step }) => {
  return (
    <div className="recipe-step">
      <p>{step.description}</p>
      <img src={`images/${step.imageUrl}`} alt={`Step ${step.stepNumber}`} />
    </div>
  );
};

export default RecipeStep;
