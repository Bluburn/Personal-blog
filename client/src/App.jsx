import Navbar from "./components/navbar/navbar.jsx"
import Home from "./pages/home/home.jsx";
import Single from "./pages/single/single.jsx";
import Write from "./pages/writePost/write.jsx";
import Setting from "./pages/setting/setting.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import {
  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
const user= false;
  
  return (
    <Router>

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/setting" element={user ? <Setting/> : <Register/>} />
        <Route path="/write" element={user ? <Write/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>

    </Router>
  )
}

export default App
