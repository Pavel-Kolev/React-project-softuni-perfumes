import { Button } from "react-bootstrap";
import * as offerService from "../services/offerService"
import { useEffect, useState } from "react";



export default function OfferView({_id,additionalInfo,counterPrice,parfumID,handleTouch}){
     
  
 
   
    const deleteCommentHandler=async()=>{
  
         await offerService.DeleteComment(_id,parfumID)
        handleTouch()
       
      }
const acceptOfferHandler=async ()=>{
    await offerService.DeleteComment(_id,parfumID)
    handleTouch()
}
 
    return(

        
        <div className="offer" >
            <div className="offer-info">
            <p className="offer-text">additional info for offer -{additionalInfo}</p>
            
            <p className="offer-text">Counter offer sent - {counterPrice}$</p>
            
            </div>
            
            <div className="offer-buttons">
            <Button onClick={acceptOfferHandler}>accept  </Button>
            <Button onClick={deleteCommentHandler}>reject  </Button>

            </div>
        </div>
        
 
    )


}