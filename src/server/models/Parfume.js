const mongoose =require("mongoose")

const ParfumeSchema=new mongoose.Schema({
    img:{type:String,
        required: [true, "Provide an img"],
    match:[/(https?:\/\/.*\.(?:png|jpg))/i,"Provide valid link"]},
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