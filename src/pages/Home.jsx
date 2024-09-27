import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Home(){

    return  (
        <>
        <h1>Home page</h1>
        <h2>A site that enhances your WoW playing and tracking experience!</h2>
        <div className="container">
            <div className="container-features">
                <div className="feature">
                    <div className="features-list">
                    <Link to="/CharacterPage" className="feature-link">
                    Checklist for your Great Vault and custom checklists
                    </Link>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    
            )
}

export default Home