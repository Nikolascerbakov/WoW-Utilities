import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar(){
    return (
    <nav className="main-nav">
        <Link to="/Home" className="site-logo">
            Site Name
        </Link>
        <ul>
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/MythicPlus">MythicPlus</CustomLink>
            <CustomLink to="/Raid">Raid</CustomLink>
            <CustomLink to="/Checklist">Checklist</CustomLink>
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