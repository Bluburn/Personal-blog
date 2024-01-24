import "./post.css"
import {Link} from "react-router-dom"

export default function Post(post) {
  const PF = "localhost:5000/"
  return (
    <div className="post">
      {post.photo && 
        <img className="postImg" 
        src= {post.photo}
        alt="" />
      } 

        <div className="postInfo">

            <div className="postCats">{
                post.cataegories.map((c)=>(
                  <span className="postCat">{c.name}</span>
                ))}
                
            </div>

            <Link to={`/post/${post}`} className="link">
            <span className="postTitle">{post.title}</span>
            </Link>


            <hr />

            <span className="postDate">{new Date(post.createdAt).toDateString}</span>

        </div>

        <p className="postDesc">{post.desc}</p>
    </div>
  )
}
