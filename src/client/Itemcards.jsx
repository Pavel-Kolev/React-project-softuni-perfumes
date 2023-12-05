import React, { useContext, useEffect, useState } from "react";
import { ReactDOM } from "react";
import { CartContext } from "./CartContext";
import { useRef } from "react";
import "../public/styles.css"
 import {Link} from "react-router-dom"
 import Button from 'react-bootstrap/Button';
 
 import Card from 'react-bootstrap/Card';

function Itemcard({_id,brand,model,disc,price,img}){
    const inputEl = useRef(null);
    const context= useContext(CartContext)
    const {addOneToCart}= context.contextValue
    const addToCartHandler=()=>{

      addOneToCart(_id)
       
       }
 

    return( <>
       
<div className="Item" >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
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
        <Link to={`/parfume/${_id}`}> <Button variant="dark">Details</Button></Link>
      </Card.Body>
    </Card>
 
 </div>
     
     
</>
    )
}



export default Itemcard;