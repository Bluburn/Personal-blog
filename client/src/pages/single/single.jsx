import "./single.css"
import Sidebar from "../../components/sidebar/sidebar.jsx"
import SinglePost from "../../components/singlePost/singlePost.jsx"

export default function Single() {
  return (
    <div className="single">

        <SinglePost/>
        <Sidebar/>
    </div>
    
  )
}
