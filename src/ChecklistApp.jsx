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

    const [checkedThree, setCheckedThree] = useLocalStorage("checked", false);
    const handleChangeThree = () => { 
        setCheckedThree(!checkedThree);
    };

    const [checkedFour, setCheckedFour] = useLocalStorage("checked", false);
    const handleChangeFour = () => { 
        setCheckedFour(!checkedFour);
    };

    const [checkedFive, setCheckedFive] = useLocalStorage("checked", false);
    const handleChangeFive = () => { 
        setCheckedFive(!checkedFive);
    };

    const [checkedSix, setCheckedSix] = useLocalStorage("checked", false);
    const handleChangeSix = () => { 
        setCheckedSix(!checkedSix);
    };

    const [checkedSeven, setCheckedSeven] = useLocalStorage("checked", false);
    const handleChangeSeven = () => { 
        setCheckedSeven(!checkedSeven);
    };

    const [checkedEight, setCheckedEight] = useLocalStorage("checked", false);
    const handleChangeEight = () => { 
        setCheckedEight(!checkedEight);
    };

    const [checkedNine, setCheckedNine] = useLocalStorage("checked", false);
    const handleChangeNine = () => { 
        setCheckedNine(!checkedNine);
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
                                <CheckboxComponent label="Checkbox 1" value={checkedOne} onChange={handleChangeOne}
                                />                           
                            </div>
                            <div className="grid-check2">
                                <CheckboxComponent label="Checkbox 2" value={checkedTwo} onChange={handleChangeTwo}
                                /> 
                            </div>
                            <div className="grid-check3">
                                <CheckboxComponent label="Checkbox 3" value={checkedThree} onChange={handleChangeThree}
                                /> 
                            </div>
                            <div className="grid-check4">
                               <CheckboxComponent label="Checkbox 4" value={checkedFour} onChange={handleChangeFour}
                                /> 
                            </div>
                            <div className="grid-check5">
                               <CheckboxComponent label="Checkbox 5" value={checkedFive} onChange={handleChangeFive}
                                /> 
                            </div>
                            <div className="grid-check6">
                               <CheckboxComponent label="Checkbox 6" value={checkedSix} onChange={handleChangeSix}
                                /> 
                            </div>
                            <div className="grid-check7">
                             <CheckboxComponent label="Checkbox 7" value={checkedSeven} onChange={handleChangeSeven}
                                /> 
                            </div>
                            <div className="grid-check8">
                               <CheckboxComponent label="Checkbox 8" value={checkedEight} onChange={handleChangeEight}
                                /> 
                            </div>
                            <div className="grid-check9">
                               <CheckboxComponent label="Checkbox 9" value={checkedNine} onChange={handleChangeNine}
                                /> 
                            </div>
                        </div>
        </>
    )
}

//  const Checkbox = ({ label,value, onChange }) => {
//     return (
//         <label>
//             <input type="checkbox"
//                 checked={value}
//                 onChange={onChange}>
//             </input>
//             {label}
//         </label>       
//     );
// }; 

export default ChecklistApp;