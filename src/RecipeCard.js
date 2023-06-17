// RecipeCard.js

import React, { useState } from 'react';
import StepIndicator from './StepIndicator';

const RecipeCard = ({ recipe }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const { name, description, imageUrl, steps } = recipe;
    const currentRecipeStep = steps[currentStep];

    return (
        <div className="recipe-card">
            <h2>{name}</h2>
            <div className="recipe-description">
                <img src={`images/${imageUrl}`} alt="" />
                <p>{description}</p>
            </div>
            <StepIndicator steps={steps} currentStep={currentStep} />
            <div className="recipe-step">
                <p>{currentRecipeStep.description}</p>
                <img src={`images/${currentRecipeStep.imageUrl}`} alt={`Step ${currentRecipeStep.stepNumber}`} />
            </div>
            <div className="command-bar">
                <button onClick={handlePreviousStep} disabled={currentStep === 0}>
                    Previous
                </button>
                {currentStep < steps.length - 1 ? (
                    <button onClick={handleNextStep}>Next</button>
                ) : (
                    <p>Recipe completed!</p>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;


// import React, { useState } from 'react';

// const RecipeCard = ({ recipe }) => {
//     const [currentStep, setCurrentStep] = useState(0);

//     const handleNextStep = () => {
//         setCurrentStep((prevStep) => prevStep + 1);
//     };

//     const handlePreviousStep = () => {
//         setCurrentStep((prevStep) => prevStep - 1);
//     };

//     const { name, description, imageUrl, steps } = recipe;
//     const currentRecipeStep = steps[currentStep];

//     return (
//         <div className="recipe-card">
//             <h2>{name}</h2>
//             <div className="recipe-description">
//                 <img src={`images/${imageUrl}`} alt="" />
//                 <p>{description}</p>
//             </div>
//             <ul className="recipe-step-indicator">
//                 {steps.map((step, index) => (
//                     <li key={index} className={index === currentStep ? 'active' : ''}>
//                         {step.stepNumber}
//                     </li>
//                 ))}
//             </ul>
//             <div className="recipe-step">
//                 <p>{currentRecipeStep.description}</p>
//                 <img src={`images/${currentRecipeStep.imageUrl}`} alt={`Step ${currentRecipeStep.stepNumber}`} />
//             </div>
//             <div className="command-bar">
//                 <button onClick={handlePreviousStep} disabled={currentStep === 0}>
//                     Previous
//                 </button>
//                 {currentStep < steps.length - 1 ? (
//                     <button onClick={handleNextStep}>Next</button>
//                 ) : (
//                     <p>Recipe completed!</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RecipeCard;
