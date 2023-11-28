
import { useContext,useEffect } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/cart.css"
 
import { CartContext } from "./CartContext";

export default function CartItemDetails(product){
useEffect(()=>{
    const{_id,brand,model,disc,price,img}=product
},[])
   

return(<>
    <tr>
          <td><img src={product.img}/></td>
          <td>{product.brand} {product.disc}</td>
        
          <td>  {product.quantity}</td>
          <td>{product.price}</td>
          <td>
            <div className="buttons-group">
                <Button>add</Button>
                <Button>reset</Button>
                <Button>delete</Button>
            </div>

          </td>

 </tr>
  
           </>
)



}