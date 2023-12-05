const router = require("express").Router();
const parfumeService=require("../services/parfumeServices")
const { auth, isAuthenticated } = require("../middlewares/authmiddleware");
 
router.post("/getAll",isAuthenticated,async (req,res)=>{
 
    if(res.locals.isAuthenticated===false){
        
        try{
            const parfumeData =await parfumeService.getAll()
            res.json(parfumeData)
        }catch(err){
            const{message}=err
      
            const errorMessages=message.split(",")
            
            res.status(400).json({errorMessages})
        }
 
   }
   else if(res.locals.isAuthenticated===true){
  
    try{
 
        const parfumeDatas =await parfumeService.getParfumesOfNonUser(req.user._id)
         
        res.json(parfumeDatas)
        
    }
   catch(err){
    const{message}=err
      console.log(err)
    const errorMessages=message.split(",")
    
    res.status(400).json({errorMessages})
    
   }
   }
   


   res.end()
}) 
router.post("/create",isAuthenticated,async (req, res) => {
   
    const { name, disc, img,brand,price  } = req.body.data;
 
  try{
    await parfumeService.create({
        name,
        disc,
        img,
        brand,
        price: Number(price),
        owner: req.user,
      });
      const data=await req.body.data
      res.json(data)
    
  }catch(err){
    const{message}=err
      
    const errorMessages=message.split(",")
    
    res.status(400).json({errorMessages})
  }
  res.end()
  });


  router.post("/MyParfumes",isAuthenticated,async (req,res)=>{
  
    try{
        console.log(req.user)
        const result =await parfumeService.getParfumesOfUser(req.user._id)
        res.json(result)
    }
      
        catch(err){
            const{message}=err
      
            const errorMessages=message.split(",")
            
            res.status(400).json({errorMessages})
        }
    
        
 
    res.end()

  })
module.exports = router;