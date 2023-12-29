import "./post.css"

export default function Post() {
  return (
    <div className="post">

        <img className="postImg" 
        src="https://i.pinimg.com/originals/8d/04/76/8d04764e3f9f42fd7f2c686b4e6e3012.jpg" alt="" />

        <div className="postInfo">

            <div className="postCats">

                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
                
            </div>

            <span className="postTitle">Lorem ipsum, dolor sit amet</span>

            <hr />

            <span className="postDate">1 hours ago</span>

        </div>

        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi adipisci dicta est fuga accusamus nihil? Doloremque natus maxime accusamus!</p>
    </div>
  )
}
