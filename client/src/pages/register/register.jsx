import "./register.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    }catch(err){
      setError(true);
    }
  };
  return (
    <div className="register">

            
            <span className="registerTitle">Register</span>
            
            <form className="registerForm" onSubmit={handleSubmit}>
            
                <label>Username</label>
                <input type="text" 
                className="registerInput" 
                placeholder="Enter your username..."
                onChange={e=>setUsername(e.target.value)}
                />

                <label>E-mail</label>
                <input type="email" 
                className="registerInput" 
                placeholder="Enter your e-mail..."
                onChange={e=>setEmail(e.target.value)}
                />

                <label>Password</label>
                <input type="Password" 
                className="registerInput" 
                placeholder="Enter your password..."
                onChange={e=>setPassword(e.target.value)}
                />

                <button className="registerButton" type="s">register</button>

            </form>

            <button className="registerLoginButton">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
            {error && <span style={{color:"red", marginTop: "10px"}}>Something went wrong! Please try Again.</span>}
    </div>
  );
}
