import { useContext, useEffect, useState } from "react";
import {  useParams,useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import * as parfumeService from "./services/perfumeService";
import withOwner from "./HOC/withOwner";
import { Link } from "react-router-dom";
import DeleteModal from "./Modal"
import { Button,Modal} from "react-bootstrap";
 function DetailsPage({id}) {
  const [show, setShow] = useState(false);
 const navigate=useNavigate()
  const { ParfumeId } = useParams();
  const [parfume, setParfume] = useState({});
  const context = useContext(CartContext);
  const { addOneToCart } = context.contextValue;
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
     const [isOwner,SetIsOwner]=useState()

  
  useEffect(() => {
    async function GetOne() {
      const parfumes = await parfumeService.GetOne(ParfumeId);

      setParfume(...parfumes);
      setLoading(false);
      SetIsOwner(parfume.owner==id)
       
    
    }
    GetOne();
  }, [ParfumeId,isOwner]);


  const cartAddHandler = () => {
    addOneToCart(parfume._id);
  };



 const DeleteClickHandler=()=>{
 parfumeService.DeleteParfume(ParfumeId)


 }
 const editClickHandler=()=>{
console.log("reached")
 }
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
                  <div className="buttons">
                    {!isOwner&&  <button onClick={cartAddHandler}>Add to cart</button>}
                    {isOwner&& 
                    <>
                     
                    <Button variant="secondary" onClick={handleShow}>
        Delete Offer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Clicking delete will delete your offer on the website</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={DeleteClickHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
                    <Link to={`/parfume/${parfume._id}/edit`}  > <button>Update Offer</button></Link>
                    </>}
                 
                  </div>
             

              
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default withOwner(DetailsPage)
