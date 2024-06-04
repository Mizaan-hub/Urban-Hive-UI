import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./ProfilePage.scss";
import apiRequest from "../../lib/apiRequest"
import { Navigate, useNavigate } from "react-router-dom";

function ProfilePage() {

  const navigate =  useNavigate()

  const handleLogOut = async () => {
    try {
      const res = apiRequest.post("/auth/logout")
      localStorage.removeItem("user")
      navigate("/")
    } 
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="ProfilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
            </span>
            <span>
              Username: <b>Lana Rhoades</b>
            </span>
            <span>
              E-Mail: <b>lana69@gmail.com</b>
            </span>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
