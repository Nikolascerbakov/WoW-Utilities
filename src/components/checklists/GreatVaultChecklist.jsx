import CompletedDiv from "../UI/CompletedDiv.jsx";

function GreatVaultChecklist({ characterData, doneValues, maxValues, handleClickPlus, handleClickMinus }) {
    return (
        <div className="grid-vault-checklist">
            <div className="grid-char-name" >
                <h2>{characterData.class}</h2>
                <img src={characterData.icon} alt={characterData.class} />
            </div>
            <div className="grid-note-space"><textarea placeholder="type a note to be reminded of" rows={5} cols={50} /></div>
            <div className="grid-raid-slot"></div>
            <div className="grid-mythic-slot"></div>
            <div className="grid-world-slot"></div>

            {/* Render 9 CompletedDiv components */}
            {doneValues.map((doneValue, index) => (
                <CompletedDiv
                    key={index}
                    cssClass={`grid-check${index + 1}`}
                    doneValue={doneValue}          // Current dynamic value
                    maxValue={maxValues[index]}    // Fixed max value for each div
                    onClickPlus={() => handleClickPlus(index)}
                    onClickMinus={() => handleClickMinus(index)}
                />
            ))}
        </div>
    );
}

export default GreatVaultChecklist;
