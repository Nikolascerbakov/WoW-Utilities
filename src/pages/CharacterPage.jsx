import Button from "../components/UI/Button";
import Searchbar from "../components/UI/Searchbar";
import Select from "../components/UI/Select";
import CharacterComponent from "../components/Character/CharacterComponent";
import classesList from "../components/Character/Classes/classesList.json";
import { useState, useEffect } from "react";

function CharacterPage() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // Load the selected character from localStorage on page load
    useEffect(() => {
        const savedCharacter = localStorage.getItem('selectedCharacter');
        if (savedCharacter) {
            setSelectedCharacter(savedCharacter);
        } else {
            setSelectedCharacter('Evoker'); // Default to Evoker if nothing is saved
        }
    }, []);

    // Save the selected character to localStorage whenever it changes
    useEffect(() => {
        if (selectedCharacter) {
            localStorage.setItem('selectedCharacter', selectedCharacter);
        }
    }, [selectedCharacter]);

    const selectedClassData = classesList.find(
        (characterClass) => characterClass.class === selectedCharacter
    );

    return (
        <div className="character-page-container">
            <Select 
                selectedCharacter={selectedCharacter || ''} 
                onCharacterChange={setSelectedCharacter} 
            />
            {selectedClassData && selectedCharacter ? (
                <CharacterComponent characterData={selectedClassData} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default CharacterPage;
