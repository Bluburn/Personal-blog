import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext, useRef } from "react";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try{
        const res = axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        })
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
      }catch(err){
        dispatch({type:"LOGIN_FAILED"});
      }
  };

  return (
    <div className="login">

            
            <span className="loginTitle">Login</span>
            
            <form className="loginForm" onSubmit={handleSubmit}>
            
                <label>Username</label>
                <input 
                  type="text" 
                  className="loginInput" 
                  placeholder="Enter your e-mail..."
                  ref={userRef}
                />

                <label>Password</label>
                <input 
                  type="Password" 
                  className="loginInput" 
                  placeholder="Enter your password..."
                  ref={userRef}
                />

                <button className="loginButton" type="submit" disable={isFetching}>
                  Login
                </button>

            </form>

            <button className="loginRegisterButton">
              <Link className="link" to="/register">Register</Link>
            </button>
    </div>
  )
}
