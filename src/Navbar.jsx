import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar(){
    return (
    <nav className="main-nav">
        <Link to="/Home" className="site-logo">
            WoW-Utilities
        </Link>
        <ul>
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/MythicPlus">MythicPlus</CustomLink>
            <CustomLink to="/CharacterPage">Character</CustomLink>
        </ul>
           
            </nav>)
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

export default Navbar;