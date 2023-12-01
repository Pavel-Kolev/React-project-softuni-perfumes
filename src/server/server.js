const express =require("express")
const mongoose=require("mongoose");
const cors = require('cors');
const port=5000;
const userService=require("./services/userServices")
const parfumeService=require("./services/parfumeServices")
const app=express();
const URL="mongodb://127.0.0.1:27017/parfumes"
const errorHandlerMiddleware = require("./middlewares/errorMessage")
const cookieParser=require("cookie-parser")
 
async function dbConnect(){
    try{
        await mongoose.connect(URL)
        console.log("connected")
    }
   catch(error){
    console.log(error)
   }
}
dbConnect()

app.use(errorHandlerMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))
app.use(cookieParser())



app.get("/",async (req,res)=>{
    
    const parfumeData =await parfumeService.getAll()
    res.json(parfumeData)
 


}) 
app.post("/register",async (req,res)=>{
 const {email,username,password}=req.body
 try{  
  const user=await userService.register(email,username,password)
 
  res.json(user)
} 
 catch (err) {
    
    const{message}=err
   
    const errorMessages=message.split(",")
    
    res.status(400).json({errorMessages})
   
  }
 
 res.end()


})
app.post("/login", async (req, res) => {
    const { email,username, password } = req.body;
try{
    const token = await userService.login(email,username, password);
    
   
    res.json({token,email,username});
  
}   
    catch(err){
        const{message}=err
   
    const errorMessages=message.split(",")
    
    res.status(400).json({errorMessages})
   
    }
  
    
   
 res.end()
  });
 


app.listen(port, () => console.log(`Listening on port ${port}`))