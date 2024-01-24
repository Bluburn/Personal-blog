import "./navbar.css";
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Navbar() {
  const { user } = useContext(Context);
  const PF = "http://localhost:5123/images/"

  const handleLogout = () =>{
    dispatch({ type: "LOGOUT"});
  }
  return (

    <div className="nav">

      <div className="navLeft">

        <i className="socialIcon fab fa-facebook"></i>
        <i className="socialIcon fab fa-instagram"></i>
        <i className="socialIcon fab fa-github"></i>
        <i className="socialIcon fa fa-envelope-square"></i>
      </div>

      <div className="navCenter">

        <ul className="navList">

          <li className="navListItem">
            <Link to="/" className="link">Home</Link>
          </li>

          <li className="navListItem">
            <Link to="/" className="link">ABOUT</Link>
          </li>
          
          <li className="navListItem">
            <Link to="/" className="link">CONTACT</Link>
          </li>

          <li className="navListItem">
            <Link to="/" className="link">WRITE</Link>
          </li>

          <li className="navListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="navRight">
        { user ? (
            <Link to="/setting">
            <img className="topImg" 
              src={ PF + user.profilePic } 
              alt="" 
            />
            </Link>
            ) : (
            <ul className="navList">
              
              <li className="navListItem">

                <Link to="/login" className="link">LOGIN</Link>

              </li>

              <li className="navListItem">

                <Link to="/register" className="link">REGISTER</Link>

              </li>
            </ul>
          )
        }
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  )
}