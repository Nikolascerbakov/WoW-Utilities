import React, { useState, useEffect } from "react";
import GreatVaultChecklist from "../checklists/GreatVaultChecklist";

function CharacterComponent({ characterData }) {
    // Declare state and effect hooks unconditionally, even if `characterData` is null
    const [doneValues, setDoneValues] = useState(Array(9).fill(0)); // Initialize with 0 for each slot

    // Array of maxValues for each CompletedDiv (this can be customized)
    const maxValues = [2, 4, 6, 1, 4, 8, 2, 4, 8]; // Example max values

    // Only proceed with loading/saving doneValues if characterData exists
    useEffect(() => {
        if (characterData) {
            const { class: characterClass } = characterData;

            // Load stored doneValues for the current character when characterClass changes
            const savedDoneValues = localStorage.getItem(`doneValues-${characterClass}`);
            if (savedDoneValues) {
                setDoneValues(JSON.parse(savedDoneValues)); // Load saved values from localStorage
            } else {
                setDoneValues(Array(9).fill(0)); // Default to 0 if no saved data
            }
        }
    }, [characterData]);

    // Save doneValues to localStorage whenever they change
    useEffect(() => {
        if (characterData) {
            const { class: characterClass } = characterData;
            localStorage.setItem(`doneValues-${characterClass}`, JSON.stringify(doneValues));
        }
    }, [doneValues, characterData]);

    // Handlers for incrementing and decrementing the doneValue
    const handleClickPlus = (index) => {
        setDoneValues((prevValues) =>
            prevValues.map((value, i) => (i === index ? Math.min(maxValues[index], value + 1) : value))
        );
    };

    const handleClickMinus = (index) => {
        setDoneValues((prevValues) =>
            prevValues.map((value, i) => (i === index ? Math.max(0, value - 1) : value))
        );
    };

    // If characterData is not available, render a fallback
    if (!characterData) {
        return <h2>Choose a character to display data</h2>;
    }

    // Render the UI when characterData is available
    const { color, class: characterClass } = characterData;

    return (
        <div className="character-div" style={{ border: `8px solid ${color}`, color: color }}>
            <div className="character-info-container">
                <button>Custom checklist</button>
            </div>

            <div className="great-vault-container">
                <GreatVaultChecklist  
                    characterData={characterData} 
                    doneValues={doneValues}
                    maxValues={maxValues}
                    handleClickPlus={handleClickPlus}
                    handleClickMinus={handleClickMinus}
                />
            </div>
        </div>
    );
}

export default CharacterComponent;
