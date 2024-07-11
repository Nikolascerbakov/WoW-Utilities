import GreatVaultChecklist from "../checklists/GreatVaultChecklist";


function CharacterComponent(){

        return(
            <div className="character-div">
                <div className="character-info-container">
                    <button>Name</button>
                    <button>Icon</button>
                    <button>Add custom checklist</button>
                </div>

                <div className="great-vault-container">
                <GreatVaultChecklist />
                </div>


            </div>
        )
}

export default CharacterComponent