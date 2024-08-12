import { useState } from "react"


function Select(){

    const [selectedCharacter, setSelectedCharacter] = useState('default')



    return(
        <div>
             <label>

                Select your character:

                <select 
                    name="selectedCharacter" 
                    id="character-select" 
                    form="characters-select-form" 
                    defaultValue="default"
                    onChange={e => setSelectedCharacter(e.target.value)}
                >
                    <option value="default"></option>
                    <option value="Evoker">Evoker</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Mage">Mage</option>
                    <option value="Warlock">Warlock</option>
                </select>
             </label>
        </div>
        

       
        
    )
}

export default Select