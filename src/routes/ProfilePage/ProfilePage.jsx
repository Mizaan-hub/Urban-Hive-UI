import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./ProfilePage.scss";
import apiRequest from "../../lib/apiRequest"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {

  const navigate =  useNavigate()
  const {updateUser, currentUser} = useContext(AuthContext)

  const handleLogOut = async () => {
    try {
      await apiRequest.post("/auth/logout")
      localStorage.removeItem("user")
      navigate("/")
      updateUser(null)
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
            <Link to={"/profile/update"}>
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "../../../public/assets/pics/noAvatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-Mail: <b>{currentUser.email}</b>
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
