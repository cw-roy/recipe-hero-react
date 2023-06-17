// IngredientSearch.js

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import MultiIngredientPicker from './MultiIngredientPicker';

const IngredientSearch = ({ recipes }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [isSelectionValid, setIsSelectionValid] = useState(true);

  const handleIngredientChange = (ingredient, checked) => {
    if (checked) {
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    } else {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((selectedIngredient) => selectedIngredient !== ingredient)
      );
    }
  };

  useEffect(() => {
    const filterRecipes = () => {
      if (selectedIngredients.length > 0) {
        const filtered = recipes.filter((recipe) => {
          return selectedIngredients.every((ingredient) =>
            recipe.ingredients.includes(ingredient)
          );
        });
        setFilteredRecipes(filtered);
        setIsSelectionValid(filtered.length > 0);
      } else {
        setFilteredRecipes(recipes);
        setIsSelectionValid(true);
      }
    };

    filterRecipes();
  }, [recipes, selectedIngredients]);

  return (
    <div className="ingredient-search">
      <MultiIngredientPicker
        ingredients={Array.from(new Set(recipes.reduce((acc, recipe) => [...acc, ...recipe.ingredients], [])))}
        selectedIngredients={selectedIngredients}
        onChange={handleIngredientChange}
      />
      {!isSelectionValid && <p>No recipes match the selected ingredients. Please modify your selection.</p>}
      {isSelectionValid && filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default IngredientSearch;