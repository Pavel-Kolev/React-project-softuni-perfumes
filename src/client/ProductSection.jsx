import React from "react";
import { useState } from 'react'
 import { useEffect } from 'react'
 import { useContext } from "react";
  
import Itemcard from "./Itemcards";
import { CartContext } from "./CartContext";

function ProductSection(){
        const context= useContext(CartContext)
        const {items,loading}= context.contextValue

        return(
    <>
            <div className='product-section'>

{items&&items.map((product)=>
        <Itemcard key={product._id} {...product}></Itemcard>)}


             
             </div>
             {!items   && <h3>No Items posted yet... Be the initiator</h3>}
             </>
        )
      
}
 
export default ProductSection