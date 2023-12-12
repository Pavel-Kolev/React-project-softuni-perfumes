 
import * as request from "../lib/request"
const baseurl="https://project-parfumewebsite.onrender.com/parfumes"
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
  export const GetOne=async(data)=>{

    const result =await request.post(`${baseurl}/getOne`,data)
    return result
  }
  export const DeleteParfume=async(data)=>{
    const result=await request.remove(`${baseurl}/deleteOne/${data}`)
    return result
  }
  export const UpdateParfume=async(data,parfumeid)=>{
    const result=await request.put(`${baseurl}/updateOne/${parfumeid}`,data)
    return result
  }