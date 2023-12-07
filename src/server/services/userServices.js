const User =require("../models/User")
const bcrypt=require("bcrypt") 
const jwt=require("../lib/jwt")
exports.register= async (email,username,password)=>{
 
    const user = await User.findOne({email});
   
 
     if(!!user){
        throw new Error("The Email is already in use")
     }
else{
    const user= await User.create({email,username,password})
    const payload={
        _id:user._id,
        email:user.email,
        username:user.username,
    }
   const token= await jwt.sign(payload,"atanas",{expiresIn:"3d"})
  
   return token
 
    
  
}
       
    
 
    
    
    
    
    }
    exports.login=async (email,username,password)=>{
      const user=await User.findOne({email})
      if(!user){
          throw new Error('invalid email')
      }
      const isValid=await bcrypt.compare(password,user.password)
  
      if(!isValid){
          throw new Error('invalid username or password')
      }
      const payload={
          _id:user._id,
          username:user.username,
      }
     const token= await jwt.sign(payload,"atanas",{expiresIn:"3d"})
    
     return {token:token,id:user._id}
  }