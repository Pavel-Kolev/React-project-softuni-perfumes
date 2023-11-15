import React from "react";
import { ReactDOM } from "react";
import "../public/header.css"

function Navbar(){

    return(
        <header>
            <nav>
        <ul >
           
        <p className="branding">Pavels parfumes</p>
       
        <li><a href="/">Home</a></li>
        <li><a href="/Catalog">Catalog</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/Cart">Cart</a></li>
         
        
      </ul>
      </nav>
      </header>
    )
}
export default Navbar;