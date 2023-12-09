const router = require("express").Router();
const parfumeService=require("../services/parfumeServices")
const { auth, isAuthenticated } = require("../middlewares/authmiddleware");
router.use(auth)
router.post("/getAll",isAuthenticated,async (req,res)=>{
  
    if(res.locals.isAuthenticated===false){
        
      try{
        const parfumeData =await parfumeService.getAll()
        res.json(parfumeData)
      }
           
       catch(err){
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
      
    const errorMessages=message.split(",")
    
    res.status(400).json({errorMessages})
    
   }
   }
   


   res.end()
}) 
router.post("/create",isAuthenticated,async (req, res) => {
   
    const { name, disc, img,brand,price,model  } = req.body.data;
 
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

  router.post("/getOne",async(req,res)=>{
try{
 
  const _id=req.body.data
const result =await parfumeService.getOne(_id)
 
res.json(result)

}catch(err){

}
res.end()
  })
  router.delete("/deleteOne/:_id",async(req,res)=>{
    try{
      const{_id}=req.params
      const result=await parfumeService.deleteOne(_id)
      res.json(`you have succesfuly deleted the offer with ${-_id} id`)
    }
    
    catch(err){
      const{message}=err
      
      const errorMessages=message.split(",")
      
      res.status(400).json({errorMessages})
    }
    res.end
  })
  router.put("/updateOne/:_id",async(req,res)=>{
    try{
      const{_id}=req.params
      const data=req.body.data
        const result =await parfumeService.updateOne(_id,data)
     
      res.json(`you have succesfuly updated the offer with ${_id} id`)
    }
    
    catch(err){
      const{message}=err
      
      const errorMessages=message.split(",")
      
      res.status(400).json({errorMessages})
    }
    res.end
  })
module.exports = router;