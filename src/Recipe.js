import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map(step => (
          <li key={step.stepNumber}>
            <p>{step.description}</p>
            {step.imageUrl && <img src={step.imageUrl} alt={step.description} />}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
