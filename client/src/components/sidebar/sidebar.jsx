import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebarItem">

          <span className="sidebarTitle">About Me</span>

          <img className="sideImg"
          src="https://i.pinimg.com/564x/bf/be/ad/bfbead7c37a239b78f8aa86ac38cd642.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam odio nemo quam, aliquid culpa sunt magni minus necessitatibus voluptatem.
          </p>

        </div>

        <div className="sidebarItem">

          <span className="sidebarTitle">CATEGORIES</span>

          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Hobby</li>
            <li className="sidebarListItem">Food</li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">More About ME!</span>
          <div className="sidebarSocial">
          <i className="SocialIcon fab fa-facebook"></i>
          <i className="SocialIcon fab fa-instagram"></i>
          <i className="SocialIcon fab fa-github"></i>
          <i className="SocialIcon fa fa-envelope-square"></i>
          </div>
        </div>
    </div>
  )
}
