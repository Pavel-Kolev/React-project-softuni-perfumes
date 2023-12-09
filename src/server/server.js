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
 console.log(process.env.Mongo_uri)
 console.log(process.env.secret)
 
async function dbConnect(){
    try{
        await mongoose.connect(process.env.Mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true })
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





 

 

app.use(routes)
app.listen(port, () => console.log(`Listening on port ${port}`))