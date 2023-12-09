const router = require("express").Router();
const offerServices=require("../services/offerServices")
const { auth, isAuthenticated } = require("../middlewares/authmiddleware");
router.use(auth)
router.post('/:id/create',(req,res)=>{
    const {id}=req.params
    const {additionalInfo,counterPrice}=req.body.data
    const owner=req.user._id
     
    try{
        offerServices.createBid(id,{additionalInfo,counterPrice,owner});
          res.json("Counter-offers created")
    }
    catch(err){
        const{message}=err
      
        const errorMessages=message.split(",")
        
        res.status(400).json({errorMessages})
    }
    res.end()
})
router.post('/:id/find',async (req,res)=>{
    const {id}=req.params
  
    try {
      const result= await offerServices.find(id)
       res.json(result)

    } catch (error) {
        const{message}=error
      
        const errorMessages=message.split(",")
        
        res.status(400).json({errorMessages})
    }
res.end()
})
router.delete('/:parfumeId/:id/delete',async (req,res)=>{
    const {id}=req.params
   const {parfumeId}=req.params
    try {
      const result= await offerServices.delete(id,parfumeId)
       res.json("succesful deletion")

    } catch (error) {
        const{message}=error
      
        const errorMessages=message.split(",")
        
        res.status(400).json({errorMessages})
    }
res.end()
})
module.exports=router