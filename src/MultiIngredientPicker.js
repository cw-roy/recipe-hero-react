// MultiIngredientPicker.js

import React from 'react';

const MultiIngredientPicker = ({ ingredients, selectedIngredients, onChange }) => {
  const handleIngredientChange = (event) => {
    const { value, checked } = event.target;
    onChange(value, checked);
  };

  return (
    <div className="multi-ingredient-picker">
      <label>Select ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={ingredient}
            value={ingredient}
            checked={selectedIngredients.includes(ingredient)}
            onChange={handleIngredientChange}
          />
          <label htmlFor={ingredient}>{ingredient}</label>
        </div>
      ))}
    </div>
  );
};

export default MultiIngredientPicker;


// import React from 'react';

// const MultiIngredientPicker = ({ ingredients, selectedIngredients, onChange }) => {
//   const handleIngredientChange = (event) => {
//     const { value, checked } = event.target;
//     onChange(value, checked);
//   };

//   return (
//     <div className="multi-ingredient-picker">
//       <label>Select ingredients:</label>
//       {ingredients.map((ingredient, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             id={ingredient}
//             value={ingredient}
//             checked={selectedIngredients.includes(ingredient)}
//             onChange={handleIngredientChange}
//           />
//           <label htmlFor={ingredient}>{ingredient}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiIngredientPicker;
