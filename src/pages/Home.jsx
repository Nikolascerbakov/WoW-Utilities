import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Home(){

    return  (
        <>
        <h1>Home page</h1>
        <h2>Current working features:</h2>
        <div className="container">
            <div className="container-features">
                <div className="feature">
                <CustomLink to="/MythicPlus">
                    <img className='feature-image' src="src\assets\images\m+_tierlist_thumbnail.png" alt="m+ feature" />
                </CustomLink>
                    
                </div>
                
            </div>

        </div>
        </>
    
            )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li> 
    )
}

export default Home