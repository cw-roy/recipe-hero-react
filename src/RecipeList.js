import React, { useEffect, useState } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/path/to/recipes.json') // Replace with the actual path to your JSON file
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.name} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
