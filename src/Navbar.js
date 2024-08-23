import { Link } from "react-router-dom"
export default function Navbar(){
    return (  
        <nav className="navbar">
            <h1>Bank United</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">View My Account</a>
                <a href="./pages/Login" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Sign In</a>
            </div>
        </nav>
    );
}
 
