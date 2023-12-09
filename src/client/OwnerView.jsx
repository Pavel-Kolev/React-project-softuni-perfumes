import { useEffect, useState } from "react"
import { Button,Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as offerServices from "./services/offerService"
import OfferView from "./OfferView"
export default function OwnerView({handleShow,handleClose,show,DeleteClickHandler,parfumID}){

const [counterOffers,setCounterOffers]=useState()
const  [changed,setTouchedState]=useState(false)
const handleTouch=()=>{
  setTouchedState(!changed)
  console.log("reach")
}

useEffect(()=>{
  offerServices.FindComments(parfumID).then(result=>setCounterOffers(result))
         
    
         
       
  

},[parfumID,changed])



    return(  <>
        
        
        {counterOffers&&counterOffers.map((offer)=><><div className="comments-container">
        <h2>Comments</h2>
       
            <OfferView key={offer._id}{...offer} parfumID={parfumID}  handleTouch={handleTouch}/> 
            </div></>
        ) 
        
        
         }
           
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Clicking delete will delete your offer on the
            website
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={DeleteClickHandler}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        
        
       
      </>)
}