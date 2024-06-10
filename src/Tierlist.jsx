
function Tierlist(){

    return(
        <>
            <div className="tierlist-container">
                <div className="tierlist-tier">
                    <div className="tierlist-grade s-tier-bg">
                        <h3 className="tier-letter-size">S</h3>
                    </div>
                        <ul className="tierlist-items">
                            <a href="https://www.wowhead.com/guide/dungeons/azure-vault-strategy" target="blank">
                                <div className="tierlist-item-container purple-vault-bg">
                                    <div className="tierlist-item-image">
                                        <img src="src\assets\icons\dungeon_azurevaults.jpg" className="icon-image-rounded"></img>
                                    </div>
                                    <div className="tierlist-item-label white-text">The Azure Vault</div>
                                </div>
                            </a>
                        </ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade a-tier-bg">
                        <h3 className="tier-letter-size">A</h3>
                    </div>
                        <ul className="tierlist-items"> 
                            <a href="https://www.wowhead.com/guide/dungeons/nokhud-offensive-strategy" target="blank">
                                <div className="tierlist-item-container brown-nokhud-bg brown-nokhud-border-color">
                                    <div className="tierlist-item-image">
                                    <img src="src\assets\icons\dungeon_nokhud.jpg" className="icon-image-rounded"></img>
                                    </div>
                                    <div className="tierlist-item-label white-text"><span>The Nokhud Offensive</span></div>
                                </div>
                            </a>

                            <a href="https://www.wowhead.com/guide/dungeons/algethar-academy-strategy" target="blank">
                                <div className="tierlist-item-container cyan-academy-bg cyan-academy-border-color">
                                    <div className="tierlist-item-image">
                                    <img src="src\assets\icons\dungeon_dragonacademy.jpg" className="icon-image-rounded"></img>
                                    </div>
                                    <div className="tierlist-item-label white-text"><span>Algethar Academy</span></div>
                                </div>
                            </a>
                        </ul>
                </div>
                <div className="tierlist-tier">
                        <div className="tierlist-grade b-tier-bg">
                            <h3 className="tier-letter-size">B</h3>
                        </div>
                            <ul className="tierlist-items">
                                <a href="https://www.wowhead.com/guide/dungeons/brackenhide-hollow-strategy" target="blank">
                                    <div className="tierlist-item-container green-brackenhide-bg green-brackenhide-border-color">
                                        <div className="tierlist-item-image">
                                            <img src="src\assets\icons\dungeon_brackenhidehollow.jpg" className="icon-image-rounded"></img>
                                        </div>
                                        <div className="tierlist-item-label white-text"><span>Brackenhide Hollow</span></div>
                                    </div>
                                </a>

                                <a href="https://www.wowhead.com/guide/dungeons/ruby-life-pools-strategy" target="blank">
                                    <div className="tierlist-item-container red-lifepools-bg red-lifepools-border-color">
                                        <div className="tierlist-item-image">
                                        <img src="src\assets\icons\dungeon_lifepools.jpg" className="icon-image-rounded"></img>
                                        </div>
                                        <div className="tierlist-item-label white-text"><span>Ruby Life Pools</span></div>
                                    </div>
                                </a>

                                <a href="https://www.wowhead.com/guide/dungeons/halls-of-infusion-strategy" target="blank">
                                    <div className="tierlist-item-container blue-halls-bg blue-halls-border-color">
                                        <div className="tierlist-item-image">
                                        <img src="src\assets\icons\dungeon_hallsofinfusion.jpg" className="icon-image-rounded"></img>
                                        </div>
                                        <div className="tierlist-item-label white-text"><span>Halls of Infusion</span></div>
                                    </div>
                                </a>
                            </ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade c-tier-bg">
                        <h3 className="tier-letter-size">C</h3>
                    </div>
                        <ul className="tierlist-items">
                                <a href="https://www.wowhead.com/guide/dungeons/uldaman-legacy-of-tyr-strategy" target="blank">
                                    <div className="tierlist-item-container yellow-uldaman-bg yellow-uldaman-border-color">
                                        <div className="tierlist-item-image">
                                        <img src="src\assets\icons\dungeon_uldaman.jpg" className="icon-image-rounded"></img>
                                        </div>
                                        <div className="tierlist-item-label white-text">
                                        <span>Uldaman</span></div>
                                    </div>
                                </a>

                                <a href="https://www.wowhead.com/guide/dungeons/neltharus-strategy" target="blank">
                                    <div className="tierlist-item-container bordeau-neltharus-bg bordeau-neltharus-border-color">
                                        <div className="tierlist-item-image">
                                        <img src="src\assets\icons\dungeon_neltharus.jpg" className="icon-image-rounded"></img>
                                        </div>
                                        <div className="tierlist-item-label white-text">
                                        <span>Neltharus</span></div>
                                    </div>
                                </a>

                        </ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade d-tier-bg">
                        <h3 className="tier-letter-size">D</h3>
                    </div>
                    <ul className="tierlist-items"></ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade e-tier-bg">
                        <h3 className="tier-letter-size">E</h3>
                    </div>
                    <ul className="tierlist-items"></ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade f-tier-bg">
                        <h3 className="tier-letter-size">F</h3>
                    </div>
                    <ul className="tierlist-items"></ul>
                </div>
                

            </div>

        </>
    )
}

export default Tierlist