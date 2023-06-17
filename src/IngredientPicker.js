// IngredientPicker.js

import React from 'react';

const IngredientPicker = ({ ingredients, selectedIngredient, onChange }) => {
  return (
    <div className="ingredient-picker">
      <label htmlFor="ingredient">Select an ingredient:</label>
      <select id="ingredient" value={selectedIngredient} onChange={onChange}>
        <option value="">All Ingredients</option>
        {ingredients.map((ingredient, index) => (
          <option key={index} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IngredientPicker;
