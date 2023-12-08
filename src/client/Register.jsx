import { useContext, useState,useMemo } from "react"
import { useForm } from "./hooks/useForm"
import * as userService from "./services/userService"
import AuthContext from "./contexts/AuthContext"
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Register({arr} ) {
  const{registerSubmitHandler}=useContext(AuthContext)
  const initialValues=useMemo(()=>({
    email:"",
    username:"",
    password:"",
    repeatPassword:"",
}),[])
const{values,onSubmit,onChange,errors}= useForm(registerSubmitHandler,initialValues,[],"register")
const[showErr , setShow]=useState(false)
 
const ErrorHandleShow=()=>{
    if(arr||errors){
        setShow(true)
    }
  
else{
    setShow(false)
}

} 
const ErrorHandleCloser=()=>{
    setShow(false)
    
    
    }
 
 
    
console
    return (
      <>
      <div className="container-form">
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
      <Form.Group className="mb-3" controlId="formBasicRePassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="repeatPassword" placeholder="Password" name="repeatPassword" onChange={onChange} value={values.repeatPassword}/>
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
                {arr&&arr.map((error)=>  
        
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