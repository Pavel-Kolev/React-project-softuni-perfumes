import React, { useContext, useEffect, useState } from "react";
import { ReactDOM } from "react";
import { CartContext } from "./CartContext";

import "../public/styles.css"
 import {Link, useLocation} from "react-router-dom"
 import Button from 'react-bootstrap/Button';
 
 import Card from 'react-bootstrap/Card';
import AuthContext from "./contexts/AuthContext";
import withOwner from "./HOC/withOwner";

function Itemcard({_id,brand,model,disc,price,img}){
    const context= useContext(CartContext)
    const {addOneToCart}= context.contextValue
 
    const addToCartHandler=()=>{

      addOneToCart(_id)
       
       }
 
 
    return( <>
       
<div className="Item" >
<Card  border="dark" style={{ width: '18rem' }}>
  <div className="img-container">
      <Card.Img variant="top" src={img} style={{width:"auto"}} />
      </div>
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Text>
        {disc}
        </Card.Text>
        <Card.Text>
        {model}
        </Card.Text>
        <Card.Text>
        {price}$
        </Card.Text>
      <Link to={`/parfume/${_id}`}  > <Button variant="dark">Details</Button></Link>
    
     
      </Card.Body>
    </Card>
 
 </div>
     
     
</>
    )
}



export default  Itemcard;