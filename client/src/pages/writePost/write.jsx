import "./write.css"

export default function Write() {
  return (
    <div className="write">

        <form className="writeForm">

            <img className="writeImg" src="https://i.pinimg.com/originals/23/37/fb/2337fbd974335abbd0626463e6dbff6e.jpg" 
            alt="" />
            <div className="writeFormGroup">

                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>

                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title?" className="writeInput" autoFocus={true}/>

            </div>

            <div className="writeFormGroup">

                <textarea className="writeInput writeText" placeholder="Let's write a story..!" type="text"></textarea>

            </div>
            
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
