
function Select({ onCharacterChange }){


    const handleChange = (e) => {
        onCharacterChange(e.target.value);
    }

    return(
        <div>
             <label>

                Select your character:

                <select 
                    name="selectedCharacter" 
                    id="character-select" 
                    form="characters-select-form" 
                    defaultValue="none"
                    onChange={handleChange}
                >
                    <option value="none"></option>
                    <option value="Evoker">Evoker</option>
                    <option value="Mage">Mage</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Warlock">Warlock</option>
                </select>
             </label>
        </div>
        

       
        
    );
}

export default Select