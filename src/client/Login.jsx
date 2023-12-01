import { useEffect, useState } from "react"
import { useForm } from "./hooks/useForm"
import * as userService from "./services/userService"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function Login({loginSubmitHandler,errs}){
    const{values,onSubmit,onChange,errors}= useForm(loginSubmitHandler,{
        email:"",
        username:"",
        password:"",
    },[],"login")
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
        <>
            <form onSubmit={onSubmit}>
              
                   <label htmlFor="email">email</label>
                <input type="text" name="email" id="email"  onChange={onChange} value={values.email}  />
                <label htmlFor="username">username</label>
                <input type="text"  name="username" id="username" onChange={onChange} value={values.username}/>
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password"  onChange={onChange} value={values.password}/>
             
                <input type="submit" onClick={ErrorHandleShow}/>




            </form>
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
  </div>
  </>
    )
}