const mongoose =require("mongoose")

const BidSchema=new mongoose.Schema({
   body:String,
owner:{
    type:mongoose.Types.ObjectId,
    ref:"User"
}
,parfume:{
    type:mongoose.Types.ObjectId,
    ref:"Parfume"
}

},{timestamps:true})
const bid=mongoose.model("bid",BidSchema)
module.exports=bid