const router= require("express").Router();
const userController=require('./controllers/userController')
const parfumeController=require("./controllers/parfumeController")
const offerController=require("./controllers/offerController")
const { auth, isAuthenticated } = require("./middlewares/authmiddleware");

 
router.use("/user",userController)
router.use("/parfumes",parfumeController)
router.use("/offers",offerController)







module.exports=router