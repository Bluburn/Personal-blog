import Header from "../../components/header/header.jsx";
import Posts from "../../components/posts/posts.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import "./home.css";

export default function Home () {
    return (
          <>
                <Header/>
                <div className="home">
                  <Posts/>
                  <Sidebar/>
                </div>
          </>
    )
}
