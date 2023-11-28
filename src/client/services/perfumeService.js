 
import * as request from "../lib/request"
export const  getAllParfumes= async ()=>{ 
     
    const result =await request.get("http://localhost:5000")
      
       
   
 
    return result

    
  
  
  }