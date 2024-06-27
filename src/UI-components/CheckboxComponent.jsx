import './CheckboxComponent.css'
// import { useState } from 'react'; //
import { useLocalStorage } from '../useLocalStorage.jsx';

function CheckboxComponent(){

    const [checked, setChecked] = useLocalStorage("checked", false);

    return (
        <>
        <label>
            <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            />
        </label>
        <p>The checkbox is {checked}</p>
        </>
    )

}

export default CheckboxComponent;

