import { useState } from "react";
import validateRegCredentials from "../utils/validateUsers";
import * as userService from "../services/userService"
export   function useForm (registerSubmitHandler,initialValues,startingErrors,type){
    const [values,setValues]= useState(initialValues)
    const[errors,setErrors]=useState(startingErrors)
    const onChange=(e)=>{
            setValues(state=>( {
                ...state,
                 [e.target.name]:e.target.value
            }) )

           
    }
  if(type==="register"){

 
    const  onSubmit=  (e)=>{
      
        e.preventDefault()
         validateRegCredentials(values)===undefined?setErrors([]):setErrors(validateRegCredentials(values))
        if(errors.length===0){
            
            
            
             registerSubmitHandler(values)
        }
        else{
            console.log(errors)
            return(errors)
        }
    }
    return{
        values,
        onChange,
        onSubmit,
        errors
    }
}
else if(type==="login"){
    const onSubmit=(e)=>{
      
        e.preventDefault()
         validateRegCredentials(values)===undefined?setErrors([]):setErrors(validateRegCredentials(values))
        if(errors.length===0){
             
            registerSubmitHandler(values)
        }
        else{
            console.log(errors)
            return(errors)
        }
    }
    return{
        values,
        onChange,
        onSubmit,
        errors
    }




}
   
}