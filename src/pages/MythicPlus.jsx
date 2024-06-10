import Tierlist from '../Tierlist.jsx';

function MythicPlus(){

    return (
        <>
        <h1>M+ page</h1>
        
        <div className="affix-container">
        <div className="affix-icons">
            <img src="src\assets\icons\affix_fortified.jpg" alt="fortified icon" />
            <img src="src\assets\icons\affix_entangling.jpg" alt="entangling icon" />
            <img src="src\assets\icons\affix_bolstering.jpg" alt="bolstering icon" />
        </div>
        <h3>Fortified, Entangling, Bolstering</h3>
        </div>

        <Tierlist />
        
        </>
    
)
}

export default MythicPlus