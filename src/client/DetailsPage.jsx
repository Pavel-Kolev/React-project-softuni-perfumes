import { useContext, useEffect, useState, useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import * as parfumeService from "./services/perfumeService";
import withOwner from "./HOC/withOwner";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "./hooks/useForm";
import * as offerService from "./services/offerService";
import AuthContext from "./contexts/AuthContext";
import CommentSender from "./CommentSender";
import OwnerView from "./OwnerView";
function DetailsPage({ id }) {
  const {isAuthenticated}=useContext(AuthContext)
  const [errs, setErrs] = useState();
  const { ParfumeId } = useParams();
  const initialValues = useMemo(
    () => ({
      additionalInfo: "",
      counterPrice: "",
    }),[])
  const [show, setShow] = useState(false);
  const [parfume, setParfume] = useState({});
  const context = useContext(CartContext);
  const { addOneToCart } = context.contextValue;
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isOwner, SetIsOwner] = useState();

  const createOfferHandler = async (data) => {
console.log(ParfumeId)
    const result = await offerService.CreateComment(ParfumeId, data);
    if (result.errorMessages) {
      setErrs(result.errorMessages);
    } else {
      setErrs();
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
        setLoading(false);
        SetIsOwner(parfume.owner == id);
      }
      GetOne();
    }, [ParfumeId, isOwner]);
 

    

    return (
      <>
        {!loading && (
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

                  {!isOwner && (
                  <CommentSender  onSubmit={onSubmit} values={values} onChange={onChange} ErrorHandleShow={ErrorHandleShow}/>
                  )} {isOwner &&(<>
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
                 
                    
                 
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  ;
}
export default withOwner(DetailsPage);
