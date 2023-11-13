import React from "react";
import { ReactDOM } from "react";
import  "../public/styles.css"

function Navbar(){

    return(
        <header>
            <nav>
        <ul >
           
        <img className="logo"src="/imgs/perfume-logo-vector-icon-illustration-design-lifestyle-shop-brand-company-292631050.webp" alt=""/>
       
        <li><a href="/">Browse</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="users/register">Register</a></li>
        <li><a href="users/login">Login</a></li>
        <li><a href="users/Cart">Cart</a></li>
         
        
      </ul>
      </nav>
      </header>
    )
}
export default Navbar;