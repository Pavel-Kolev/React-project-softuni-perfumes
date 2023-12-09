const bids=require("../models/Bid")
const parfumes=require('./../models/Parfume')
exports.getSingleParfume = (id) => {
    return parfumes.findById(id).populate("offers")

  };
exports.createBid=async(ParfumeId,data)=>{

     
    const result =await bids.create(data)
    
     const parfume =await this.getSingleParfume(ParfumeId)
     
     parfume.offers.push(result._id)
     return parfume.save()
}
exports.find=async(ParfumeId)=>{
 const parfume =await this.getSingleParfume(ParfumeId)
 console.log(parfume)
    const CounterOffers=parfume.offers
    
    console.log(CounterOffers)
    return CounterOffers
    
}
exports.delete=async(commentId,parfumeId)=>{

const parfume =await this.getSingleParfume(parfumeId)
 
 parfume.offers=await parfume.offers.filter(commentID=>commentID==commentId)
 const result=await bids.findByIdAndDelete(commentId) 
 await parfume.save() 
 

}