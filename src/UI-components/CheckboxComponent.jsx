import './CheckboxComponent.css'
// import { useState } from 'react'; //


function CheckboxComponent({label,value, onChange}){

   

    return (
        <label>
            <input type="checkbox"
                checked={value}
                onChange={onChange}>
            </input>
            {label}
        </label>
    )

}

export default CheckboxComponent;

