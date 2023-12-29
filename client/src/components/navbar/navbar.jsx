import "./navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = false;
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

          <li className="navListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="navRight">

        {
          user ? (

            <img className="topImg" 
            src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/394506952_2598486426994540_816444570629160108_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFCu1mSRXuziRiCFEkHGIBGmBAZcmP_yM6YEBlyY__IzhY4b3NXgdY0lU90Cc9AK_dCxGu9eCcH_77_tQu25uWH&_nc_ohc=goXOfbohpxkAX9khBRw&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfDxW8hV7v8gDStX-wY3xXwZNjAkZEQQC8CGMn5e0CC0jA&oe=65888857" alt="" 
            />
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