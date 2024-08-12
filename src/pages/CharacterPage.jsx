import Button from "../components/UI/Button";
import Searchbar from "../components/UI/Searchbar";
import Select from "../components/UI/Select";
import CharacterComponent from "../components/Character/CharacterComponent";
import classesList from "../components/Character/Classes/classesList.json"
import { useState } from "react";

function CharacterPage(){

    const [selectedCharacter, setSelectedCharacter] = useState('none');

    const selectedClassData = classesList.find(
        (characterClass) => characterClass.class === selectedCharacter
    );

    const [shownCharacter,setShownCharacter] = useState();

    // const [input, setInput] = useState("");

    // const handleInputChange = (event) => {
    //     setInput(event.target.value);
    // }

    // const handleClickSearch = () => {

    // }



    return (
        // <div className="character-page-container">
        //     <h1>Character page</h1>
        //     <div className="search-container">
        //         <Select  onCharacterChange={setSelectedCharacter} />
        //         {/* <Searchbar placeholder="Enter your character name" handleInputChange={handleInputChange}/> */}
        //         {/* <Button text={"Search"} className={"search-button"} onClick={handleClickSearch}/> */}
        //     </div>

        //     <div className="character-container">
        //         <CharacterComponent />

        //     </div>
        // </div>

        <div className="character-page-container">
        <Select onCharacterChange={setSelectedCharacter} />
        <CharacterComponent characterData={selectedClassData} />
        <h1>Selected Character: {selectedCharacter}</h1>
        </div>
             
            );
}

export default CharacterPage