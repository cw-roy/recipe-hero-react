// MultiIngredientPicker.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

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
          <button onClick={() => handleAddClick(ingredient)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button onClick={() => handleRemoveClick(ingredient)}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MultiIngredientPicker;


// Previous version of MultiIngredientPicker.js

// import React from 'react';

// const MultiIngredientPicker = ({ ingredients, selectedIngredients, onAddIngredient, onRemoveIngredient }) => {
//   const handleAddClick = (ingredient) => {
//     onAddIngredient(ingredient);
//   };

//   const handleRemoveClick = (ingredient) => {
//     onRemoveIngredient(ingredient);
//   };

//   return (
//     <div className="multi-ingredient-picker">
//       <label>Select ingredients:</label>
//       {ingredients.map((ingredient, index) => (
//         <div key={index}>
//           <span>{ingredient}</span>
//           <button onClick={() => handleAddClick(ingredient)}>Add</button>
//           <button onClick={() => handleRemoveClick(ingredient)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiIngredientPicker;