import './Layout.scss'
import NavBar from "../../components/NavBar/NavBar"

import { Outlet } from 'react-router-dom' // to call other elements as children in app.jsx

function Layout (){
    return(
        <div className="layout">
            <div className="NavBar">
                <NavBar/>
            </div>
            <div className="content">
                <Outlet/>  {/* To connect children elements to main layout*/} 
            </div>
        </div>
    )
}
export default Layout