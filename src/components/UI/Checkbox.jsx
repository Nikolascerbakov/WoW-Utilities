import React from "react";

const Checkbox = ({ label, checked, onChange}) => {
    
    return(
        <label>
            <input type="checkbox" checked={checked} onChange={onChange}>
            </input>
            {label}
        </label>
        
    )
}

export default Checkbox;