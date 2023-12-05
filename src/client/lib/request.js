 

 const buildOptions=(data)=>{
const options={}
const token=localStorage.getItem("token")
if(data){

    options.body=JSON.stringify({data:data})
    options.headers={
        "content-type":"application/json",
     
    }
   
 if(data&&token){
   
        options.body= JSON.parse(options.body)
        
    
 
    options.body.token=token
    options.body=JSON.stringify(options.body)
    console.log(options.body)
}


     
 }
 if(!data&&token){
  
   options.body = JSON.stringify({token:token})
 
  
    options.headers={
        "content-type":"application/json",
     
    }
   console.log(options.body)
     
 }
 
return options
 }

 export const request =async(method,url,data)=>{
 
const response =await fetch(url,{...buildOptions(data),method})
  
const result=await response.json() 
 
return result
 
 
 }
 
export const get=request.bind(null,"GET")
export const put=request.bind(null,"PUT")
export const post=request.bind(null,"POST")
export const remove=request.bind(null,"DELETE")
export const patch=request.bind(null,"PATCH")