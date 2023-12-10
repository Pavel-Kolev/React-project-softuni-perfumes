const mongoose =require("mongoose")
const { MongooseFindByReference } = require('mongoose-find-by-reference');
const BidSchema=new mongoose.Schema({
    additionalInfo:{type:String},
   counterPrice:{type:Number},
owner:{
    type:mongoose.Types.ObjectId,
    ref:"User"
}
,parfume:{
    type:mongoose.Types.ObjectId,
    ref:"Parfume"
}

})
BidSchema.plugin(MongooseFindByReference);
const bid=mongoose.model("bid",BidSchema)
module.exports=bid