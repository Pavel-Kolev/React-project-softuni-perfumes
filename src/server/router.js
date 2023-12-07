const router= require("express").Router();
const userController=require('./controllers/userController')
const parfumeController=require("./controllers/parfumeController")
const { auth, isAuthenticated } = require("./middlewares/authmiddleware");

 
router.use("/user",userController)
router.use("/parfumes",parfumeController)








module.exports=router