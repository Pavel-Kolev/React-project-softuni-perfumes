import { useContext, useEffect, useState } from "react"
import ProductSection from "./ProductSection"
import Itemcard from "./Itemcards"
import * as perfumeService from"./services/perfumeService"
import AuthContext from "./contexts/AuthContext"



function UserOffers(){

const {token,username}=useContext(AuthContext)
const [products,setProducts]=useState([])
useEffect( ()=>{
    perfumeService.GetUsersParfumes().then(parfume=>setProducts(parfume))

},[])
 


return(

     
    <div className='product-section'>
{products&&products.map((product)=>
        <Itemcard key={product._id} {...product}></Itemcard>)}

        </div>
    
)

}



export default UserOffers