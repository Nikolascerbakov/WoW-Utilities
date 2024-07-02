import './CheckboxComponent.css'
import { useLocalStorage } from '../useLocalStorage.ts';
// import { useState } from 'react'; //


function CheckboxComponent(){

    const [checked, setChecked] = useLocalStorage("checked", false);
   
    return (
        <>
        <label>
            <input type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}>
            </input>
        </label>
        <p>Checkbox</p>
        </>
        
    )

}

export default CheckboxComponent;

