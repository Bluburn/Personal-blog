import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">

            
            <span className="registerTitle">Register</span>
            
            <form className="registerForm">
            
                <label>Username</label>
                <input type="text" 
                className="registerInput" 
                placeholder="Enter your username..."/>

                <label>E-mail</label>
                <input type="email" 
                className="registerInput" 
                placeholder="Enter your e-mail..."/>

                <label>Password</label>
                <input type="Password" 
                className="registerInput" 
                placeholder="Enter your password..."/>
                <button className="registerButton">register</button>

            </form>

            <button className="registerLoginButton">
              <Link className="link" to="/login">Login</Link>

            </button>
    </div>
  )
}
