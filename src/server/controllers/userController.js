const router = require("express").Router();
const { auth, isAuthenticated } = require("../middlewares/authmiddleware");
const userService=require("../services/userServices")
router.post("/register",async (req,res)=>{
    const {email,username,password}=req.body.data
    try{  
     const token=await userService.register(email,username,password)
    
     res.json({token,email,username})
   } 
    catch (err) {
       
       const{message}=err
      
       const errorMessages=message.split(",")
       
       res.status(400).json({errorMessages})
      
     }
    
    res.end()
   
   
   })
   router.post("/login", async (req, res) => {
       
       const { email,username, password } = req.body.data;
     
     
   try{
       const {token,id} = await userService.login(email,username, password);
       
      
       res.json({token,email,username,id});
     
   }   
       catch(err){
           const{message}=err
      
       const errorMessages=message.split(",")
       
       res.status(400).json({errorMessages})
      
       }
     
       
      
    res.end()
     });

  module.exports = router;