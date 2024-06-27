import './CheckboxComponent.css'
// import { useState } from 'react'; //


function CheckboxComponent(checked, checkHandler){

   

    return (
        <>
        <label>
            <input 
            type="checkbox"
            checked={checked}
            onChange={checkHandler}
            />
        </label>
        <p>The checkbox is</p>
        </>
    )

}

export default CheckboxComponent;

