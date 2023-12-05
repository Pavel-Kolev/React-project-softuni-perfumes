
import { useContext,useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/cart.css"
 
import { CartContext } from "./CartContext";

export default function CartItemDetails({_id,brand,model,disc,price,img,quantity}){
    const context= useContext(CartContext)
        const {deleteFromCart}= context.contextValue
 const [show,setShow]=useState(true)
   
const removeFromCartHandler=()=>{
deleteFromCart(_id)
setShow(false)

}
return(<>
{show&&<tr>
          <td><img src={img}/></td>
          <td>{brand} {disc}</td>
        
          <td>  {quantity}</td>
          <td>{price}</td>
          <td>
            <div className="buttons-group">
                <Button>add</Button>
                <Button>reset</Button>
                <Button onClick={removeFromCartHandler}>delete</Button>
            </div>

          </td>

 </tr>
  
} </> 
    
)



}