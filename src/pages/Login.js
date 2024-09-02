import Navbar from '../Navbar'
import './styles/Login.css'

const Login = () => {
    return ( 
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
        
                <div className="input">
                    Name: 
                    <input type="text" />
                </div>
                <div className="input"> 
                    Email:
                    <input type="email" />
                </div>
                <div className="input"> 
                    Password:
                    <input type="password" />
                </div>
            </div>
        </div>


     );
}
 
export default Login;