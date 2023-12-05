const mongoose =require("mongoose")

const ParfumeSchema=new mongoose.Schema({
    img:String,
brand:String,
model:String,
disc:String,
price:Number,
owner:{
    type:mongoose.Types.ObjectId,
    ref:"User"
}

})
const parfume=mongoose.model("parfume",ParfumeSchema)
module.exports=parfume