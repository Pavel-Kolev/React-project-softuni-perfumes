import React from "react";
import { useState } from 'react'
 import { useEffect } from 'react'
 import { useContext } from "react";
 import * as perfumeService from"./services/perfumeService"
import Itemcard from "./Itemcards";
import { CartContext } from "./CartContext";


function ProductSection(){
        
        const [cartProducts, setCartProducts] = useState();
       useEffect(()=>{
        perfumeService.getAllParfumes().then(productwithquant=>(productwithquant.map((cartProducts)=> ({...cartProducts , quantity:0})   ))).then(productswithquant=>setCartProducts(productswithquant))
       },[])
        
      
        return(
    <>
            <div className='product-section'>

{cartProducts&&cartProducts.map((product)=>
        <Itemcard key={product._id} {...product}></Itemcard>)}


             
             </div>
             {!cartProducts  && <h3>No Items posted yet... Be the initiator</h3>}
             </>
        )
      
}
 
export default ProductSection