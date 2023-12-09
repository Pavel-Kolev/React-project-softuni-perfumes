import { useContext, useEffect, useState,useMemo } from "react"
import { useForm } from "../hooks/useForm"
import * as userService from "../services/userService"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import AuthContext from "../contexts/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Login( ){
    const{loginSubmitHandler,loginErrs}=useContext(AuthContext)
    const initialValues=useMemo(()=>({
      email:"",
      username:"",
      password:"",
  }),[])
    const{values,onSubmit,onChange,errors}= useForm(loginSubmitHandler,initialValues,[],"login")
    const[showErr , setShow]=useState(false)
    
const ErrorHandleShow=()=>{
    if(loginErrs||errors){
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange} value={values.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" name="username" onChange={onChange} value={values.username} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={onChange} value={values.password}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={ErrorHandleShow}>
        Submit
      </Button>
    </Form>
    </div>
         <div className="toast-container">
  {loginErrs&&loginErrs.map((error)=>  
        
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