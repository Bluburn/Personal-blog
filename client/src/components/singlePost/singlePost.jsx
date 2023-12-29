import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">

        <div className="singlePostWrapper">

            <img src="https://i.pinimg.com/originals/a0/b4/3b/a0b43ba98494ae66509266dc8da916b6.jpg" 
            alt="" className="singlePostImg"/>

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.

                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>

            <div className="singlePostInfo">

                <span className="singlePostAuthor">
                    Author: <b>Pearl</b>
                </span>
                <span className="singlePostDate">
                    1 hours Ago
                </span>

            </div>

            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nobis iure facere natus veritatis quos beatae adipisci sunt iusto soluta voluptates ex corrupti consequatur enim itaque eaque aspernatur! Enim, facilis.
            </p>
        </div>
    </div>
  )
}
