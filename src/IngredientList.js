// IngredientList.js

import React from 'react';

const IngredientList = ({ ingredients }) => {
  return (
    <div>
      <h3>Selected:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
