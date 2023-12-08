import React from "react";
import { useState } from 'react'
 import { useEffect } from 'react'
 
 import * as perfumeService from"./services/perfumeService"
import Itemcard from "./Itemcards";
 
 


function ProductSection(){
       
        const [catalogProducts, setCartProducts] = useState();
       useEffect(()=>{
        perfumeService.getAllParfumes().then(productwithquant=>(productwithquant.map((cartProducts)=> ({...cartProducts , quantity:0})   ))).then(productswithquant=>setCartProducts(productswithquant))
       },[])
        
      
        return(
    <>
            <div className='product-section'>

{catalogProducts&&catalogProducts.map((product)=>
        <Itemcard key={product._id} {...product}  ></Itemcard>)}


             
             </div>
             {!catalogProducts  && <h3>No Items posted yet... Be the initiator</h3>}
             </>
        )
      
}
 
export default ProductSection