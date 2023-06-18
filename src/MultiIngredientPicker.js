// Test version of MultiIngredientPicker.js

import React from 'react';

const MultiIngredientPicker = ({ ingredients, selectedIngredients, onAddIngredient, onRemoveIngredient }) => {
  const handleAddClick = (ingredient) => {
    onAddIngredient(ingredient);
  };

  const handleRemoveClick = (ingredient) => {
    onRemoveIngredient(ingredient);
  };

  return (
    <div className="multi-ingredient-picker">
      <label>Select ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <span>{ingredient}</span>
          <button onClick={() => handleAddClick(ingredient)}>Add</button>
          <button onClick={() => handleRemoveClick(ingredient)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MultiIngredientPicker;