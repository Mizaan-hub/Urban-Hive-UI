import { Link } from "react-router-dom";
import "./Register.scss";

function Register() {
  return (
    <div className="Register">
      <div className="formContainer">
        <form>
          <h1>Welcome Back</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button>Log In</button>
          <Link to="/login">Already have an account? Register Now</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/public/assets/pics/Urban Hive.gif" alt="" />
      </div>
    </div>
  );
}
export default Register;
