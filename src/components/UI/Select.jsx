

function Select(){

    return(
        <div>
             <label htmlFor="characters">Choose a character</label>

            <select name="characters" id="characters-select" form="characters-select-form">
                <option value="Evoker">Evoker</option>
                <option value="Paladin">Paladin</option>
                <option value="Rogue">Rogue</option>
                <option value="Mage">Mage</option>
                <option value="Warlock">Warlock</option>
            </select>

        </div>
        

       
        
    )
}

export default Select