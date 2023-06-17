// IngredientSearch.js

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import IngredientPicker from './IngredientPicker';

const IngredientSearch = ({ recipes }) => {
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const ingredients = recipes.reduce((allIngredients, recipe) => {
    return allIngredients.concat(recipe.ingredients);
  }, []);

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    setSelectedIngredient(ingredient);
    if (ingredient) {
      const filtered = recipes.filter((recipe) =>
        recipe.ingredients.includes(ingredient)
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  return (
    <div className="ingredient-search">
      <IngredientPicker
        ingredients={Array.from(new Set(ingredients))}
        selectedIngredient={selectedIngredient}
        onChange={handleIngredientChange}
      />
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default IngredientSearch;
