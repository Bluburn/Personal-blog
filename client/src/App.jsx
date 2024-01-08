import Navbar from "./components/navbar/navbar.jsx"
import Home from "./pages/home/home.jsx";
import Single from "./pages/single/single.jsx";
import Write from "./pages/writePost/Write.jsx";
import Setting from "./pages/setting/Setting.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context.jsx";
import { useContext } from "react";

function App() {
const {user} = useContext(Context);
  
    return (
      <Router>

        <Navbar/>
        <Routes>


          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/setting" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId"/>
        </Routes>

      </Router>
    )
}

export default App
