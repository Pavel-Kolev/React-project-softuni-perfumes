const mongoose =require("mongoose")

const ParfumeSchema=new mongoose.Schema({
    img:String,
brand:String,
model:String,
disc:String,
price:Number,

})
const parfume=mongoose.model("parfume",ParfumeSchema)
module.exports=parfume