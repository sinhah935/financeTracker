import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (  
        <nav className="navbar">
            <h1>Bank United</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/account">View My Account</a>
                <a href="/login" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Sign In</a>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
 
