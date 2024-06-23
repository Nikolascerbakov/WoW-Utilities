import './CheckboxComponent.css'
import { useState } from 'react';

function CheckboxComponent(){

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    return (
        <>
        <label>
            <input 
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            />
        </label>
        <p>The checkbox is {checked ? "checked" : "unchecked"}</p>
        </>
    )

}

export default CheckboxComponent;

