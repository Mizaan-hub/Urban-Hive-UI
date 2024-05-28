import { useState } from "react";
import "./NavBar.scss"
import { Link } from "react-router-dom";

function NavBar(){

    const [open, setOpen] = useState(false);

    const user = true;

    return(
        <nav>
            <div className="left">

                <Link href="/" className="logo">
                    <img src="/public/assets/images/logo.png" alt="" />
                    <span>Urban Hive</span>
                </Link>
                <Link href="/">Home</Link>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>

            </div>

            <div className="right">

                {user ? (
                    <div className="user">
                        <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                        <span className="username">Lana Rhoades</span>
                        <Link to="/profile" className="profile">
                            <div className="notifications">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ):(
                    <>
                    <a href="/">Sign In</a>
                    <a href="/" className="register">Sign Up</a>
                    </>
                    )}

                <div className="menuIcon">
                    <img src="/public/assets/images/menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    {user? (
                        <Link to="/profile">Profile</Link>
                    ):(
                    <>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                    </>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default NavBar;