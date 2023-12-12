import { useContext, useEffect, useState, useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import * as parfumeService from "../client/services/perfumeService";
import withOwner from "../client/HOC/withOwner";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "../client/hooks/useForm";
import * as offerService from "../client/services/offerService";
import AuthContext from "../client/contexts/AuthContext";
import CommentSender from "../client/Offers/OfferSender";
import OwnerView from "../client/User/OwnerView";
import validateOffer from "../client/utils/validateOffers";
function DetailsPage({id} ) {
  const {isAuthenticated}=useContext(AuthContext)
  
  const { ParfumeId } = useParams();
   
    const initialValues = useMemo(
      () => ({
        additionalInfo: "",
        counterPrice: "",
      }),[])
 
 
  const [show, setShow] = useState(false);
  const [parfume, setParfume] = useState({});
   
  
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isOwner, SetIsOwner] = useState();
const[err,setErrors]=useState()
  const createOfferHandler = async (data) => {
     validateOffer(data)===undefined?setErrors([]):setErrors(validateOffer(data))

    if(err.length===0){
      const result = await offerService.CreateComment(ParfumeId, data);
      if (result.errorMessages) {
        setErrors(result.errorMessages);
      } else {
        setErrors();
      }
    }
    
   
  };
  const DeleteClickHandler = () => {
    parfumeService.DeleteParfume(ParfumeId);
  };

  const ErrorHandleShow = () => {
    if (errors) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  const { values, onSubmit, onChange, errors, type } = useForm(
    createOfferHandler,
    initialValues,
    [],
    "createCounterOffer"
  );
    
    useEffect(() => {
      async function GetOne() {
      
        const parfumes = await parfumeService.GetOne(ParfumeId);

        setParfume(...parfumes);
        
        SetIsOwner(parfume.owner ===id);
        setLoading(false)
      
      }
      GetOne();
    }, [ParfumeId,isOwner]);
 

    

    return (
      <>
        (
          <>
            <div className="container">
              <div className="details">
                <div className="image">
                  <img src={parfume.img} alt="" />
                </div>
                <div className="content">
                  <h1 className="name">
                    {parfume.brand} {parfume.model}
                  </h1>

                  <div className="price">{parfume.price}$</div>
                  <div className="discription">{parfume.disc}</div>
                  {!loading&&isOwner &&(<>
                    <div className="buttons">
                    <Button variant="secondary" onClick={handleShow}>
            Delete Offer
          </Button>  
          <Link to={`/parfume/${ParfumeId}/edit`}>
           
          <button>Update Offer</button>
        </Link> 
                      </div>
                    <OwnerView handleShow={handleShow} handleClose={handleClose} show={show} DeleteClickHandler={DeleteClickHandler}parfumID={parfume._id}/> 
                    </>
                   )}
{!isOwner && (<CommentSender onSubmit={onSubmit} values={values} ErrorHandleShow={ErrorHandleShow}onChange={onChange} />)}
                     
                                    {!isAuthenticated&&<p>Please log in to send Offers</p>}
                  
                                 
                
                  
                 
                 
                    
                  
                 
                </div>
              </div>
            </div>
          </>
        )
      </>
    );
  ;
}
export default withOwner(DetailsPage);
