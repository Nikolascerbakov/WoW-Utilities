import React, { useState, useEffect } from "react";

function GreatVaultChecklist({ characterData }) {
    const [checkboxes, setCheckboxes] = useState(Array(9).fill(false));

    // Generate a unique key for each character's checkboxes
    const localStorageKey = `checkboxes-${characterData.class}`;

    // Load the checkbox states from localStorage when the characterData changes
    useEffect(() => {
        const savedCheckboxes = JSON.parse(localStorage.getItem(localStorageKey));
        if (savedCheckboxes) {
            setCheckboxes(savedCheckboxes);
        } else {
            // Initialize if not found in localStorage
            setCheckboxes(Array(9).fill(false));
        }
    }, [characterData.class, localStorageKey]);

    // Save the checkbox states to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(checkboxes));
    }, [checkboxes, localStorageKey]);

    // Handle checkbox change
    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };

    return (
        <div className="grid-vault-checklist">
            <div className="grid-char-name">{characterData.class}</div>
            <div className="grid-note-space">Space for a note or a reminder</div>
            <div className="grid-raid-slot">Raid slot</div>
            <div className="grid-mythic-slot">MythicPlus slot</div>
            <div className="grid-pvp-slot">PvP slot</div>
            {[...Array(9)].map((_, index) => (
                <div key={index} className={`grid-check${index + 1}`}>
                    <input
                        type="checkbox"
                        checked={checkboxes[index]}
                        onChange={() => handleCheckboxChange(index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default GreatVaultChecklist