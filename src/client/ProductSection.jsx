import React from "react";
import { useState } from 'react'
 import { useEffect } from 'react'
 import axios from 'axios'
import Itemcard from "./Itemcards";
import "../public/styles.css"
function ProductSection(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
     fetchInfo();
    }, [])
    async function fetchInfo(){ 
     
        const response= await axios.get("http://localhost:5000") 
          
           
          setProducts(response.data) 
          
          setLoading(false);
    
        
      
      
      }
      if(!loading){
         
    const parfumes=products.map((product)=><Itemcard key={product._id} productprop={product}></Itemcard>)
    
        return(
    
            <div className='product-section'>

            { parfumes}
             
             </div>
        )
      }
}

export default ProductSection