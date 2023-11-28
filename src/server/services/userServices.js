const User =require("../models/User")
const mongoose=require("mongoose")
exports.register= async (email,username,password)=>{
 
    const user = await User.findOne({email});
   
console.log(!!user)
     if(!!user){
        throw new Error("dp")
     }
else{
   return User.create({email,username,password})
}
       
    
 
    
    
    
    
    }