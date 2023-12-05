 
import * as request from "../lib/request"
const baseurl="http://localhost:5000/parfumes"
export const  getAllParfumes= async ()=>{ 
     
    const result =await request.post(`${baseurl}/getAll`)
      
       
   
 
    return result

    
  
  
  }
  export const CreateParfume=async(data)=>{
 const result =await request.post(`${baseurl}/create`,data)
 
return result

  }

  export const GetUsersParfumes=async()=>{
    const result =await request.post(`${baseurl}/MyParfumes`)
    
    return result
  }