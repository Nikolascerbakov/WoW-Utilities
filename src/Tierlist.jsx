
function Tierlist(){

    return(
        <div className="container">
            <div className="tierlist-container">
                <div className="tierlist-tier">
                    <div className="tierlist-grade s-tier-bg">
                        <h3 className="tier-letter-size">S</h3>
                    </div>
                        <ul className="tierlist-items">
                            <a href="https://www.wowhead.com/guide/dungeons/azure-vault-strategy">
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
                            <a href="https://www.wowhead.com/guide/dungeons/nokhud-offensive-strategy">
                                <div className="tierlist-item-container green-nokhud-bg green-nokhud-border-color">
                                    <div className="tierlist-item-image">
                                    <img src="src\assets\icons\dungeon_nokhud.jpg" className="icon-image-rounded"></img>
                                    </div>
                                    <div className="tierlist-item-label white-text"><span>The Nokhud Offensive</span></div>
                                </div>
                            </a>

                            <a href="https://www.wowhead.com/guide/dungeons/algethar-academy-strategy">
                                <div className="tierlist-item-container cyan-academy-bg cyan-academy-border-color">
                                    <div className="tierlist-item-image">
                                    <img src="src\assets\icons\dungeon_dragonacademy.jpg" className="icon-image-rounded"></img>
                                    </div>
                                    <div className="tierlist-item-label white-text "><span>Algethar Academy</span></div>
                                </div>
                            </a>
                        </ul>
                </div>
                <div className="tierlist-tier">
                        <div className="tierlist-grade b-tier-bg">
                            <h3 className="tier-letter-size">B</h3>
                        </div>
                            <ul className="tierlist-items">
                                <a href="">
                                    <div className="tierlist-item-container">
                                        <div className="tierlist-item-image"></div>
                                        <div className="tierlist-item-label"><span>Brackenhide Hollow</span></div>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="tierlist-item-container">
                                        <div className="tierlist-item-image"></div>
                                        <div className="tierlist-item-label"><span>Ruby Life Pools</span></div>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="tierlist-item-container">
                                        <div className="tierlist-item-image"></div>
                                        <div className="tierlist-item-label"><span>Halls of Infusion</span></div>
                                    </div>
                                </a>
                            </ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade c-tier-bg">
                        <h3 className="tier-letter-size">C</h3>
                    </div>
                        <ul className="tierlist-items">
                                <a href="">
                                    <div className="tierlist-item-container">
                                        <div className="tierlist-item-image"></div>
                                        <div className="tierlist-item-label"><span>Uldaman</span></div>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="tierlist-item-container">
                                        <div className="tierlist-item-image"></div>
                                        <div className="tierlist-item-label"><span>Neltharus</span></div>
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

        </div>
    )
}

export default Tierlist