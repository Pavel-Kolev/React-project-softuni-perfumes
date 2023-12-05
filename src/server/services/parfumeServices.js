const parfumeee=require("./../models/Parfume.js")
exports.getAll = async () => {
    let parfumes = await parfumeee.find().lean();
  
     
    return parfumes;
  };
  exports.create = async (data) => {
    const parfume = await parfumeee.create(data);
  
    return parfume;
  };
  exports.getParfumesOfUser =async(userId)=>{
const parfume =await parfumeee.find({owner:userId}).lean()
 
return parfume


  }
  exports.getParfumesOfNonUser =async(owners)=>{
    const parfume =await parfumeee.find().lean()
const parfumes= parfume.filter((product)=>product.owner!=owners)
  
    return parfumes
    
    
      }