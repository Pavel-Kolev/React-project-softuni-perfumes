import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "../public/styles.css"

import "../public/styles.css"
function Itemcard(productprop){
 
    
console.log(productprop.productprop)
    return( <>
       
<div className="Item">
<a></a>
 <img className="product-photo" src={productprop.productprop.img}/>
 <div className="discription">
 <p className="product-text">{productprop.productprop.brand}</p>
 <p className="product-text">{productprop.productprop.disc}</p>
 </div>
 <p className="product-text">{productprop.productprop.model}</p>
 <p className="product-text">{productprop.productprop.price}$</p>
 </div>
     
</>
    )
}



export default Itemcard;