import Button from "../components/UI/Button"
import GreatVaultChecklist from "../components/checklists/GreatVaultChecklist";
import { useState } from "react";

function CharacterPage(){

    const [checklists, setChecklists] = useState();
    const [newVaultChecklist, setNewVaultChecklist] = useState(<GreatVaultChecklist/>);
    const [newCustomChecklist, setNewCustomChecklist] = useState([]);

    const addVaultChecklist = () => {
        setNewVaultChecklist(<GreatVaultChecklist/>);
        setChecklists(c =>[...c, newVaultChecklist]);
        setNewVaultChecklist("");

    }

    const addCustomChecklist  = () => {

    }

    return (
        <div className="character-page-container">
            <h1>Choose desired checklist?</h1>
            <div className="add-buttons-container">
                <Button text={"Add Great Vault checklist"} className={"add-greatvault-button"} onClick={addVaultChecklist}/>
                <Button text={"Add custom checklist"} className={"add-customchecklist-button"} onClick={addCustomChecklist}/>
            </div>

                <div className="checklists-container">
                    <ul>
                        {checklists.map((checklist, index) =>
                            <li key={index}>
                                {checklist}
                            </li>
                        )}

                    </ul>

                </div>

        </div>
             
            )
}

export default CharacterPage