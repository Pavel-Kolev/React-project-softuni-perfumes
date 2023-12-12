import { useForm } from "../hooks/useForm"
import { useState,useContext,useEffect } from "react"
import AuthContext from "../contexts/AuthContext"
import { Form,Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
 import * as parfumeService from "../services/perfumeService"
 import { Toast } from "react-bootstrap"
function EditOffer(){
 const navigate=useNavigate()
  const [err, setErr] = useState([]);
  const {ParfumeId}=useParams()
  const [parfume, setParfume] = useState({ brand:"",
    disc:"",
    model:"",
    img:"",
    price:""});
    const{errs}=useContext(AuthContext)
    const editOfferHandler = async (data) => {
      const result =await parfumeService.UpdateParfume(data,ParfumeId)
   
      if (result.errorMessages) {
        setErr(result.errorMessages);
      } else {
        setErr();
        navigate("/UserParfumes")
      }
 
    };

    useEffect(() => {
      async function GetOne() {
        const parfumes = await parfumeService.GetOne(ParfumeId);
  
        setParfume(...parfumes);
      
    
         
      
      }
      GetOne();
    }, [ParfumeId]);
    
    const{values,onSubmit,onChange,errors,type}= useForm(editOfferHandler,parfume,[],"editoffer")
    
    
    const[showErr , setShow]=useState(true)
   
const ErrorHandleShow=()=>{
    if(err||errors||errs){
        setShow(true)
        
    }
  
else{

    setShow(false)
}

} 
const ErrorHandleCloser=()=>{
    setShow(false)
    
    
    }
    
    return (
        <><div className="container-form">
           <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="brand" placeholder="Enter brand of parfume" name="brand" onChange={onChange} value={values.brand} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicModel">
        <Form.Label>Model</Form.Label>
        <Form.Control type="model" placeholder="Model" name="model" onChange={onChange} value={values.model} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImg">
      <Form.Label>Image</Form.Label>
        <Form.Control type="img" placeholder="imgurl" name="img" onChange={onChange} value={values.img}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDisc">
      <Form.Label>Discription</Form.Label>
        <Form.Control type="disc" placeholder="Short discription of the product" name="disc" onChange={onChange} value={values.disc}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
      <Form.Label>Price</Form.Label>
        <Form.Control type="price" placeholder="Price" name="price" onChange={onChange} value={values.price}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={ErrorHandleShow}>
        Submit
      </Button>
    </Form>
   
 
     
    </div>
         <div className="toast-container">
  {errors&&errors.map((error)=>  
        
        <Toast show={showErr} onClose={ErrorHandleCloser} key={error}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
        </Toast>
     )}
  </div>
  </>


    )
}

export default EditOffer