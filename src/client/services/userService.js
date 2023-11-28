import * as request from '../lib/request'
const baseurl="http://localhost:5000"
export const  register= async (data)=>{ 
  const result =await request.post(`${baseurl}/register`,data) 

  return result 

  
  
  }
