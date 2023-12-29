import "./setting.css"
import Sidebar from "../../components/sidebar/sidebar.jsx"

export default function Setting () {
  return (
    <div className="settings">

            <div className="settingWrapper">

                <div className="settingTitle">

                    <span className="UpdateTitle">Update Account</span>
                    <span className="DeleteTitle">Delete Account</span>

                </div>

                <form className="settingForm">

                    <label>Profile Picture</label>

                    <div className="settingPp">

                        <img src="https://i.pinimg.com/originals/a0/b4/3b/a0b43ba98494ae66509266dc8da916b6.jpg" alt="" />

                        <label htmlFor="fileInput">
                            <i class="PpIcon fa-solid fa-circle-user"></i>

                        </label>

                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder="Pearl"/>

                    <label>Email</label>
                    <input type="email" placeholder="Baifoz88@gmail.com"/>

                    <label>Password</label>
                    <input type="password"/>

                    <button className="settingSubmit">Update</button>
                    
                </form>
            </div>
        <Sidebar/>
    </div>
  )
}
