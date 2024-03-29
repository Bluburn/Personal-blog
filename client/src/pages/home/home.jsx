import { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  console.log(location);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts + search");
      setPosts(res.data);
      console.log(res.data);

    };
    fetchPosts();
  }, [search]);
return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
