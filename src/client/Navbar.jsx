import React, { useContext } from "react";
import { ReactDOM } from "react";
import "../public/header.css"
import {Link} from "react-router-dom"
import AuthContext from "./contexts/AuthContext";
function Navbar(){
const {isAuthenticated,username}=useContext(AuthContext)
    return(
        <header>
            <nav>
        <ul >
           
        <p className="branding">Pavels parfumes</p>
       
        <li><Link to= "/">Home </Link></li>
        <li><Link to="/Catalog">Catalog</Link></li>
        {!isAuthenticated&& <>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login </Link></li>
        </>
         }
         {isAuthenticated&& <> <li><Link to="/Logout">Logout </Link></li>
         <li><Link to="/Create">Create </Link></li>
         <li><Link to="/UserParfumes">My Offers</Link></li>
           </>
}
           <li><Link to="/Cart">Cart </Link></li>
       
        
      </ul>
      </nav>
      </header>
    )
}
export default Navbar;