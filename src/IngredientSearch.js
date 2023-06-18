// Test version of IngredientSearch

import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import RecipeCard from './RecipeCard';
import MultiIngredientPicker from './MultiIngredientPicker';

const IngredientSearch = ({ recipes }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [isSelectionValid, setIsSelectionValid] = useState(true);

  const handleAddIngredient = (ingredient) => {
    // Check if the ingredient is already selected
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
  };
  
  // const handleAddIngredient = (ingredient) => {
  //   setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  // };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.filter((selectedIngredient) => selectedIngredient !== ingredient)
    );
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
        onAddIngredient={handleAddIngredient}
        onRemoveIngredient={handleRemoveIngredient}
      />
      <IngredientList ingredients={selectedIngredients} />
      {!isSelectionValid && <p>No recipes match all of the selected ingredients. Please modify your selection.</p>}
      {isSelectionValid &&
        filteredRecipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)}
    </div>
  );
};

export default IngredientSearch;