// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import IngredientSearch from './IngredientSearch';
import recipesData from './recipes.json';



const App = () => {
  const recipes = recipesData.recipes;

  return (
    <div id="the-app">
      <Header />
      <main>
        <section className="ingredient-search">
          <IngredientSearch recipes={recipes} />
        </section>
      </main>
    </div>
  );
};

export default App;
