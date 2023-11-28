import React from "react";
import { ReactDOM } from "react";
import "../public/header.css"
import {Link} from "react-router-dom"
function Navbar(){

    return(
        <header>
            <nav>
        <ul >
           
        <p className="branding">Pavels parfumes</p>
       
        <li><Link to= "/">Home </Link></li>
        <li><Link to="/Catalog">Catalog</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login </Link></li>
        <li><Link to="/Cart">Cart </Link></li>
         
        
      </ul>
      </nav>
      </header>
    )
}
export default Navbar;