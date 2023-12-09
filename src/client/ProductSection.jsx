import React from "react";
import { useState } from 'react'
 import { useEffect } from 'react'
 
 import * as perfumeService from"./services/perfumeService"
import Itemcard from "./Itemcards";
import Spinner from 'react-bootstrap/Spinner';
import CardLoading from "./CardLoading";
 


function ProductSection(){
                const [loading,setLoading]=useState(true)
        const [catalogProducts, setCartProducts] = useState();
       useEffect(()=>{
        perfumeService.getAllParfumes().then(setLoading(false)).then(productwithquant=>(productwithquant.map((cartProducts)=> ({...cartProducts , quantity:0})   ))).then(productswithquant=>setCartProducts(productswithquant))
       
       },[])
        
      
        return(
    <>
    


            <div className='product-section'>
            {loading&&(<CardLoading></CardLoading>)}
{catalogProducts&&catalogProducts.map((product)=>
        <Itemcard key={product._id} {...product}  ></Itemcard>)}


             
             </div>
             {!catalogProducts  && <h3>No Items posted yet... Be the initiator</h3>}
             </>
        )
      
}
 
export default ProductSection