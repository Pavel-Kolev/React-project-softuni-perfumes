import { useContext, useEffect, useState } from "react"
import ProductSection from "../../Parfume/ProductSection"
import Itemcard from "../../Parfume/Itemcards"
import * as perfumeService from"../services/perfumeService"
import { useLocation } from "react-router-dom"
 




function UserOffers(){
    
 

const [products,setProducts]=useState([])
useEffect( ()=>{
    perfumeService.GetUsersParfumes().then(parfumes=>(parfumes.map((parfume)=> ({...parfume ,isOwner:true})   ))).then(parfume=>setProducts(parfume))

},[])
 

return(

     
    <div className='product-section'>
{products&&products.map((product)=>
        <Itemcard key={product._id} {...product}  ></Itemcard>)}

        </div>
    
)

}



export default UserOffers