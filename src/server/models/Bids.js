const mongoose =require("mongoose")
const { MongooseFindByReference } = require('mongoose-find-by-reference');
const BidSchema=new mongoose.Schema({
    additionalInfo:{type:String,required: [true, "there should be additional info"]},
   counterPrice:{type:Number,required: [true, "we should have a counter offer"]},
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