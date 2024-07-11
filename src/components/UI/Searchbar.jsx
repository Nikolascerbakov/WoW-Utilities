

function Searchbar({placeholder, value, handleInputChange}){

    return(
        <input
            type="search"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        > 
        </input>
    )
}

export default Searchbar