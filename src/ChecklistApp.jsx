import CheckboxComponent from './UI-components/CheckboxComponent.jsx'
import { useLocalStorage } from './useLocalStorage.jsx';



function ChecklistApp(){

    const [checkedOne, setCheckedOne] = useLocalStorage("checked", false);

    const handleChangeOne = () => { 
        setCheckedOne(!checkedOne);
    };

    const [checkedTwo, setCheckedTwo] = useLocalStorage("checked", false);

    const handleChangeTwo = () => { 
        setCheckedTwo(!checkedTwo);
    };



    return(
        <>
                        <div className="grid-checklist">
                            <div className="grid-char-name">Evokach</div>
                            <div className="grid-note-space">Space for a note or a reminder</div>
                            <div className="grid-raid-slot">Raid slot</div>
                            <div className="grid-mythic-slot">MythicPlus slot</div>
                            <div className="grid-pvp-slot">PvP slot</div>
                            <div className="grid-check1">
                                <Checkbox label="Checkbox 1" value={checkedOne} onChange={handleChangeOne}
                                />                           
                            </div>
                            <div className="grid-check2">
                                <Checkbox label="Checkbox 2" value={checkedTwo} onChange={handleChangeTwo}
                                /> 
                            </div>
                            <div className="grid-check3">
                                
                            </div>
                            <div className="grid-check4">
                               
                            </div>
                            <div className="grid-check5">
                               
                            </div>
                            <div className="grid-check6">
                               
                            </div>
                            <div className="grid-check7">
                             
                            </div>
                            <div className="grid-check8">
                               
                            </div>
                            <div className="grid-check9">
                               
                            </div>
                        </div>
        </>
    )
}

const Checkbox = ({ label,value, onChange }) => {
    return (
        <label>
            <input type="checkbox"
                checked={value}
                onChange={onChange}>
            </input>
            {label}
        </label>       
    );
};

export default ChecklistApp;