const express =require("express")
require('dotenv').config()
 
const mongoose=require("mongoose");
const cors = require('cors');
const port=5000;
const userService=require("./services/userServices")
const parfumeService=require("./services/parfumeServices")
const app=express();

const errorHandlerMiddleware = require("./middlewares/errorMessage")
const routes = require("./router")
const cookieParser=require("cookie-parser");
 
 
async function dbConnect(){
    try{
        await mongoose.connect(process.env.Mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected")
    }
   catch(error){
     
   }
}
dbConnect()

app.use(errorHandlerMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: 'https://main--incomparable-gumdrop-00bbd4.netlify.app',
	credentials: true
}))
app.use(cookieParser())





 

 

app.use(routes)
app.listen(port, () => console.log(`Listening on port ${port}`))