import React, { useContext, useEffect, useState } from "react";
import { ReactDOM } from "react";
import { CartContext } from "./CartContext";
import { useRef } from "react";
import "../public/styles.css"
 
import "../public/styles.css"


function Itemcard({_id,brand,model,disc,price,img}){
    const inputEl = useRef(null);
    const context= useContext(CartContext)
    const {addOneToCart}= context.contextValue
    const addToCartHandler=()=>{

      addOneToCart(_id)
       
       }
 

    return( <>
       
<div className="Item" >
<a ></a>
<p>{_id}</p>
 <img className="product-photo" src={img}/>
 <div className="discription">
 <p className="product-text">{ brand}</p>
 <p className="product-text">{ disc}</p>
 </div>
 <p className="product-text">{  model}</p>
 <p className="product-text">{ price}$</p>
 <div>
      <button onClick={addToCartHandler}>Add</button>
     </div>
 </div>
     
     
</>
    )
}



export default Itemcard;