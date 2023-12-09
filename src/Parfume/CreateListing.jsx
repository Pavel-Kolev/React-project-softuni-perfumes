import { useForm } from "../client/hooks/useForm"
import { useState,useContext, useMemo } from "react"
import AuthContext from "../client/contexts/AuthContext"
import { Form,Button } from "react-bootstrap"
import { Toast } from "react-bootstrap"
function CreateOffer(){
    const{createOfferHandler,errs}=useContext(AuthContext)


     const initialValues=useMemo(()=>({
      brand:"",
        disc:"",
        model:"",
        img:"",
        price:""
     }),[])
    const{values,onSubmit,onChange,errors}= useForm(createOfferHandler,initialValues,[],"createoffer")
    const[showErr , setShow]=useState(true)
 
const ErrorHandleShow=()=>{
    if(errs||errors){
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
  {errs&&errs.map((error)=>  
        
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

export default CreateOffer