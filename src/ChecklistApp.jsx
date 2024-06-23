import CheckboxComponent from './UI-components/CheckboxComponent.jsx'



function ChecklistApp(){


    return(
        <>
                        <div className="grid-checklist">
                            <div className="grid-char-name">Evokach</div>
                            <div className="grid-note-space">Space for a note or a reminder</div>
                            <div className="grid-raid-slot">Raid slot</div>
                            <div className="grid-mythic-slot">MythicPlus slot</div>
                            <div className="grid-pvp-slot">PvP slot</div>
                            <div className="grid-check1">
                                <CheckboxComponent />                           
                            </div>
                            <div className="grid-check2">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check3">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check4">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check5">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check6">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check7">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check8">
                                <CheckboxComponent/>
                            </div>
                            <div className="grid-check9">
                                <CheckboxComponent/>
                            </div>
                        </div>
        </>
    )
}

export default ChecklistApp;