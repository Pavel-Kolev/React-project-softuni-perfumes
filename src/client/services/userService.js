import * as request from '../lib/request'
const baseurl="https://project-parfumewebsite.onrender.com/user"
export const  register= async (data)=>{ 
  const result =await request.post(`${baseurl}/register`,data) 

  return result 

  
  
  }
  export const  login= async (data)=>{ 
    const result =await request.post(`${baseurl}/login`,data) 
   
    return result 
  
    
    
    }
