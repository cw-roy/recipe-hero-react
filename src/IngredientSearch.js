import React, { useState } from "react";

const IngredientSearch = ({ recipes, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ingredients.includes(searchTerm)
    );
    onSearch(filteredRecipes);
  };

  return (
    <div className="ingredient-search">
      <input
        type="text"
        placeholder="Search by ingredient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default IngredientSearch;
