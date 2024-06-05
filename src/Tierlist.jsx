
function Tierlist(){

    return(
        <div className="container">
            <div className="tierlist-container">
                <div className="tierlist-tier">
                    <div className="tierlist-grade s-tier-bg">
                        <h3 className="s-tier">S</h3>
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
                    <div className="tierlist-grade">A</div>
                        <ul className="tierlist-items"> 
                            <a href="">
                                <div className="tierlist-item-container">
                                    <div className="tierlist-item-image"></div>
                                    <div className="tierlist-item-label"><span>The Nokhud Offensive</span></div>
                                </div>
                            </a>

                            <a href="">
                                <div className="tierlist-item-container">
                                    <div className="tierlist-item-image"></div>
                                    <div className="tierlist-item-label"><span>Algethar Academy</span></div>
                                </div>
                            </a>
                        </ul>
                </div>
                <div className="tierlist-tier">
                        <div className="tierlist-grade">B</div>
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
                    <div className="tierlist-grade">C</div>
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
                    <div className="tierlist-grade">D</div>
                    <ul className="tierlist-items"></ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade">E</div>
                    <ul className="tierlist-items"></ul>
                </div>
                <div className="tierlist-tier">
                    <div className="tierlist-grade">F</div>
                    <ul className="tierlist-items"></ul>
                </div>
                

            </div>

        </div>
    )
}

export default Tierlist