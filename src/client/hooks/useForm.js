import { useEffect, useState } from "react";
import validateRegCredentials from "../utils/validateUsers";
import * as userService from "../services/userService"
import validateOffer from "../utils/validateOffer";
export   function useForm (SubmitHandler,initialValues,startingErrors,type){
  
    const [values,setValues]= useState(initialValues)
    useEffect(()=>{
        setValues(initialValues)
    },[initialValues])
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
            
            
            
             SubmitHandler(values)
        }
        else{
           
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
          
         
             
          SubmitHandler(values)
       
        
          
    }
    return{
        values,
        onChange,
        onSubmit,
        errors
    }




}
else if(type==="createoffer"){
    const onSubmit=(e)=>{
      
        e.preventDefault()
        validateOffer(values)===undefined?setErrors([]):setErrors(validateOffer(values))
       
        if(errors.length===0){
            
            
            
            SubmitHandler(values)
       }
       else{
          
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
else if(type==="editoffer"){
    const onSubmit=(e)=>{
      
        e.preventDefault()
          
         
             
        validateOffer(values)===undefined?setErrors([]):setErrors(validateOffer(values))
        if(errors.length===0){
            
            
            
            SubmitHandler(values)
       }
       else{
          
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