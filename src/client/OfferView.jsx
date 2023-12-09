import { Button } from "react-bootstrap";
import * as offerService from "./services/offerService"
import { useEffect, useState } from "react";



export default function OfferView({additionalInfo,counterPrice,_id,parfumID,changed,setTouchedState}){
  
       
   
const deleteCommentHandler=()=>{
    offerService.DeleteComment(_id,parfumID)
    setTouchedState(!changed)
}
 
    return(

        
        <div className="offer" >
            <div className="offer-info">
            <p className="offer-text">additional info for offer -{additionalInfo}</p>
            
            <p className="offer-text">Counter offer sent - {counterPrice}$</p>
            
            </div>
            
            <div className="offer-buttons">
            <Button>accept  </Button>
            <Button onClick={deleteCommentHandler}>reject  </Button>

            </div>
        </div>
        
 
    )


}