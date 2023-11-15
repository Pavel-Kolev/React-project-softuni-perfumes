const express =require("express")
const mongoose=require("mongoose");
const cors = require('cors');
const port=5000;
const parfumeService=require("./services/parfumeServices")
const app=express();
const URL="mongodb://127.0.0.1:27017/parfumes"


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

app.use(cors())
app.use(express.urlencoded({ extended: false }));
 

app.get("/",async (req,res)=>{
    
    const parfumeData =await parfumeService.getAll()
    res.json(parfumeData)
 


}) 




app.listen(port, () => console.log(`Listening on port ${port}`))