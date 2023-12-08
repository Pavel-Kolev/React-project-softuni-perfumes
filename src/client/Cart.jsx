import {useContext,useEffect,useState} from "react";

import { CartContext } from "./CartContext";
import { Table } from "react-bootstrap";
import CartItemDetails from "./CartItemDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/cart.css"
export default function Cart(){
    const context= useContext(CartContext)
    const [shownItems,setShownitems]=useState([])
    
        const {items}= context.contextValue
         useEffect(()=>{
            if(items){
                const showItems=items.filter(((p)=>p.quantity>0))
                setShownitems(showItems)
            }
          
         

         },[])
           
        
   
    return(
        <>
<div className="cart-section">
<Table striped bordered hover variant="dark" className="Cart-Table"> 
<thead>
   <tr>
            <th>снимка</th>
          <th>продукт</th>
          <th>количество</th>
          <th>Цена</th>
          <th>опции</th>
          </tr>
      </thead>
      <tbody>



{shownItems&&shownItems.map((product)=>  <CartItemDetails key={product._id}  {...product}></CartItemDetails>)}
 
 
 
 </tbody>
   </Table>
          



   </div>
   </>
  )

}