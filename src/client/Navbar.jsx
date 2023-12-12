import React, { useContext } from "react";
import { ReactDOM } from "react";

import {Link} from "react-router-dom"
import AuthContext from "./contexts/AuthContext";
import "../public/header.css"
function Navbar(){
const {isAuthenticated,username}=useContext(AuthContext)
    return(
        <header>
            <nav>
            <div className="Links">
        <ul >
           
        <p className="branding">Pavels parfumes</p>
      
        <li><Link to= "/"><p>Home</p> </Link></li>
        <li><Link to="/Catalog"><p>Catalog</p></Link></li>
        {!isAuthenticated&& <>
        <li><Link to="/register"><p>Register</p></Link></li>
        <li><Link to="/login"><p>Login</p> </Link></li>
        </>
         }
         {isAuthenticated&& <> <li><Link to="/Logout"><p>Logout</p> </Link></li>
         <li><Link to="/Create"><p>Create</p> </Link></li>
         <li><Link to="/UserParfumes"><p>My Listings</p></Link></li>
         <li><p>Hello, {username}</p></li>
           </>
}
         
           
        
      </ul>
      </div>
      </nav>
      </header>
    )
}
export default Navbar;