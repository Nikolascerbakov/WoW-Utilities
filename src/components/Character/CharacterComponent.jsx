import GreatVaultChecklist from "../checklists/GreatVaultChecklist";


function CharacterComponent({ characterData }){

        if(!characterData){
            return <><h2>Choose a character to display data</h2></>
        }

        const { color, class: characterClass, icon } = characterData;

        


        return(
            <div className="character-div" style={{ border: `8px solid ${color}`, color: color }}>
                <div className="character-info-container">
                <button>Custom checklist</button>            
                </div>

                <div className="great-vault-container">
                 <GreatVaultChecklist  characterData={characterData} />
                </div>


            </div>
        )
}

export default CharacterComponent