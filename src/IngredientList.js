import React from 'react';

const IngredientList = ({ ingredients }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
